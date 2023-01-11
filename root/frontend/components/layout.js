/* /components/Layout.js */

import React, { useContext, useState } from "react";
import Head from "next/head";
import { useAuth } from "../lib/auth2";
import Cart from "../components/cart";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

//Styling
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import AppContext from "./context";
import PopOver from "../components/popOver";

const Layout = (props) => {
  const title = "Welcome to Nextjs";
  var { user, setUser, logout } = useAuth();
  const toggle = () => setIsOpen(!isOpen);
  const [isOpen, setIsOpen] = useState(false);
  const { cart, addItem, cleanCart } = useContext(AppContext);
  const [totalItems, setTotalItems] = useState(0);

  const itemsCart = cart.items.map((ele) => ele.quantity);
  const total = [totalItems, ...itemsCart];
  const total2 = total.reduce((a, b) => a + b);

  console.log(`user from layout ${user}`);
  console.log(`getItems = ${JSON.stringify(total2)}`);
  // console.log(`total quantity ${total.grand}`);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
        <script src='https://js.stripe.com/v3' />
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
          crossOrigin='anonymous'></script>
      </Head>

      <style jsx>
        {`
          a {
            color: white;
          }
          h5 {
            color: white;
            padding-top: 11px;
          }
          .navItemsWrapper {
            backgroundcolor: black;
          }
        `}
      </style>
      <Navbar
        className='navbar navbar-light navbar-expand-md'
        {...props}>
        <NavbarToggler onClick={toggle} />
        <NavbarBrand>
          <Link href='/'>
            <img
              alt='logo'
              src='http://localhost:1337/uploads/774d3400cbda43be9e1f69057fefa221.png'
              style={{
                height: 80,
                width: 100,
              }}
            />
          </Link>
        </NavbarBrand>

        {cart.items.length > 0 && (
          <>
            <PopOver total={total2} />
          </>
        )}

        <Collapse
          isOpen={isOpen}
          navbar>
          <Nav
            className='me-auto'
            navbar>
            {/* <NavItem>
              <NavLink href='/display'>Display</NavLink>
            </NavItem> */}
            <NavItem className='ml-auto'>
              {!user && <NavLink href='/register'>Sign Up</NavLink>}
            </NavItem>
            <NavItem>
              {user && (
                <Link href='/profile'>
                  <div>
                    <FontAwesomeIcon
                      icon={faUser}
                      className='me-2'
                    />
                    <NavbarText>{user.username}</NavbarText>
                  </div>
                </Link>
              )}
            </NavItem>
            <NavItem>
              {user ? (
                <NavLink
                  href='/'
                  onClick={() => {
                    logout();
                    setUser(null);
                  }}>
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  className='navItemsWrapper'
                  href='/login'>
                  Login
                </NavLink>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Container fluid>{props.children}</Container>
    </div>
  );
};

export default Layout;
