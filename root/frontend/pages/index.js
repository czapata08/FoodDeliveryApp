import React, { useContext, useState } from "react";
import Cart from "../components/cart";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import RestaurantList from "./restaurants/restaurantList";
import { InputGroup, Input, Row, Col, Container } from "reactstrap";
import AppContext from "../components/context";
import client from "./client";

function Home() {
  const addItem = useContext(AppContext);
  const [query, setQuery] = useState("");

  return (
    <>
      <Container>
        <div className='search'>
          <h2> Local Restaurants</h2>
          <InputGroup>
            <InputGroup type='append'> Search </InputGroup>
            <Input
              onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
              value={query}
            />
          </InputGroup>
          <br></br>
        </div>
      </Container>
      <Row>
        <Col
          className='bg-dark border'
          md='8'
          lg='8'
          xl='8'>
          <Container>
            <RestaurantList search={query} />
          </Container>
        </Col>
        <Col
          className='bg-light border'
          md='4'
          lg='4'
          xl='4'>
          {addItem.cart.items.length !== 0 && (
            <Row xs='8'>
              <Cart />
            </Row>
          )}
        </Col>
      </Row>
    </>
  );
}
export default Home;
