import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import Dishes from "../../components/dishes";
import { useContext, useState } from "react";

import AppContext from "../../components/context";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function RestaurantList(props) {
  const [restaurantID, setRestaurantID] = useState(0);
  const { cart } = useContext(AppContext);
  const [state, setState] = useState(cart);
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(`Query Data: ${data.restaurants}`);

  //search query value is defined in index --
  //loop and
  let searchQuery =
    data.restaurants.filter((res) => {
      return res.name.toLowerCase().includes(props.search);
    }) || [];

  let restId = searchQuery[0] ? searchQuery[0].id : null;

  // define renderer for Dishes
  const renderDishes = (restaurantID) => {
    return <Dishes restId={restaurantID}> </Dishes>;
  };
  //get each restaurants and store in list and render with properties below
  if (searchQuery.length > 0) {
    const restList = searchQuery.map((res) => (
      <Col
        xs='12'
        md='4'
        xl='4'
        className='p-0'>
        <Card
          key={res.id}
          className='h-100'>
          <CardImg
            top={true}
            className='fluid'
            style={{ height: 180, minWidth: 80 }}
            src={`http://localhost:1337` + res.image.url}
          />
          <CardBody>
            <CardText>{res.description}</CardText>
          </CardBody>
          <div className='card-footer'>
            <Link
              as={"/restaurants/" + res.id}
              href='restaurants/[...id]'>
              <Button onClick={() => setRestaurantID(res.id)}>
                {res.name}
              </Button>
            </Link>
          </div>
        </Card>
      </Col>
    ));

    return (
      //3 col in the row
      //Just pass the element and all styling done in index.js
      <>
        <Row className='d-flex align-items-stretch'>{restList}</Row>

        {/* <Row xs='3'>{renderDishes(restaurantID)}</Row> */}
      </>
    );
  } else {
    return <h1> No Restaurants Found</h1>;
  }
}
export default RestaurantList;
