import { gql, useQuery } from "@apollo/client";
import Dishes from "../../components/dishes";
import { Container, Row, InputGroup, InputGroupAddon, Input } from "reactstrap";
import { useState, useContext } from "react";
import AppContext from "../../components/context";
import Cart from "../../components/cart";

export default function Test({ id }) {
  console.log(id);
  const addItem = useContext(AppContext);
  const [query, setQuery] = useState("");

  //APOLLO CLIENT QUERY
  const GET_RESTAURANT_DISHES = gql`
    query GET_RESTAURANT_DISHES($id: ID!) {
      restaurant(id: $id) {
        id
        name
        dishes {
          id
          name
          description
          price
          image {
            url
          }
        }
      }
    }
  `;
  //APOLLO CLIENT QUERY
  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: id },
  });
  // console.log(JSON.stringify(data.restaurant.dishes));
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  console.log(query);

  return (
    <>
      <Container>
        <div className='search'>
          <h2>{data.restaurant.name}</h2>
          <InputGroup>
            <InputGroupAddon addonType='append'> Search </InputGroupAddon>
            <Input
              onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
              value={query}
            />
          </InputGroup>
          <br></br>
        </div>
      </Container>

      <Container>
        <Dishes
          restId={id}
          search={query}></Dishes>
        {addItem.cart.items.length !== 0 && (
          <Row xs='8'>
            <Cart />
          </Row>
        )}
      </Container>
    </>
  );
}

Test.getInitialProps = function (ctx) {
  const { id } = ctx.query;
  console.log(` id from getInitialProps ${id}`);
  return { id };
};
