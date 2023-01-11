import { useAuth } from "../lib/auth2";
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import Cookies from "js-cookie";
import api from "../services/api";
import axios from "axios";

export default function Profile() {
  // const { user } = useAuth();

  return (
    <Form>
      <FormGroup row>
        <Label
          for='exampleEmail'
          sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <Input
            name='email'
            placeholder='test'
            type='email'
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for='username'
          sm={2}>
          Username
        </Label>
        <Col sm={10}>
          <Input
            name='username'
            placeholder='test'
            type='username'
          />
        </Col>
      </FormGroup>
    </Form>
  );
}

// export async function getServerSideProps() {
//   const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
//   const token = Cookies.get("token");

//   // const { user: user } = await api.get("users/me");
//   // console.log(`user object: ${user}`);

//   const { user } = await axios.get(`${API_URL}/users/me`, {
//     baseURL: API_URL[process.env.NODE_ENV],
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!user) {
//     return {
//       notFound: true,
//     };
//   }
//   console.log("ssr" + user);

//   const data = user;
//   return {
//     props: {
//       data,
//     },
//   };
// }
