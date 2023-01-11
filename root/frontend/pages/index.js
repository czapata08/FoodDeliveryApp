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
import HeroSection from "../components/hero";
import SideBar from "../components/sidebarMKT";

function Home() {
  const addItem = useContext(AppContext);
  const [query, setQuery] = useState("");

  return (
    <>
      <HeroSection src='https://images.unsplash.com/photo-1533143708019-ea5cfa80213e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8' />
      <Container>
        <div className='search'>
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
          md='3'
          lg='3'
          xl='3'>
          <SideBar />
        </Col>
        <Col
          className='bg-dark border'
          md='9'
          lg='9'
          xl='9'>
          <Container>
            <RestaurantList search={query} />
          </Container>
        </Col>
        {/* <Col
          className='bg-light border'
          md='3'
          lg='3'
          xl='3'>
          {addItem.cart.items.length !== 0 && (
            <Row xs='8'>
              <Cart />
            </Row>
          )}
        </Col> */}
      </Row>
    </>
  );
}
export default Home;
