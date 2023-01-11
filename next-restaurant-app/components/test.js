//Operational
import React, { useContext, useState } from "react";
import Head from "next/head";
import Link from "next/link";

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

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

//Context
import { useAuth } from "../lib/auth2";
import AppContext from "./context";

const Test = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const title = "Nurture Kitchen";
  const { cart } = useContext(AppContext);
  var { user, setUser, logout } = useAuth();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
      </Head>

      <Navbar className='navbar-expand-lg'>
        <NavbarBrand href='/'>Nurture Kitchen</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar>
          <Nav
            className='me-auto'
            navbar>
            <NavItem>
              <NavLink href='/display'></NavLink>
              <NavItem>
                {user ? (
                  <h5>{user.username}</h5>
                ) : (
                  <NavLink href='/register'>
                    <a className='nav-Navlink'> Sign up</a>
                  </NavLink>
                )}
              </NavItem>
              <NavItem>
                <NavLink href='/profile'>Support</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/login'>Support</NavLink>
              </NavItem>
              //show Cart as a tab. set boolean to toggle cart display in it
              <NavItem>
                <NavLink href='/cart'>Support</NavLink>
              </NavItem>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      {/* <Container>{props.children}</Container> */}
    </div>
  );
};

export default Test;
