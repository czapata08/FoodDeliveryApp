// import { useAuth } from "../lib/auth2";
// import React, { useState } from "react";
// import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";

// export default function Profile() {
//   const { user, updateUser } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const [data, updateData] = useState({});

//   function onChange(event) {
//     updateData({ ...data, [event.target.name]: event.target.value });
//   }

//   // function submitProfile() {
//   //   setLoading(true);
//   //   updateUser(data.id, data.username)
//   //     .then((res) => {
//   //       setLoading(false);
//   //       // set authed User in global context to update header/app state
//   //       // setUser(res.data.user);
//   //       // setUser((user = res.data.user));
//   //       // alert(`welcome, ${res.data.user.username}`);
//   //       console.log(`DATA FROM STRAPPI ${JSON.stringify(res.data)}`);
//   //     })
//   //     .catch((error) => {
//   //       setError(error);
//   //       setLoading(false);
//   //     });
//   // }

//   return (
//     <Form>
//       <FormGroup row>
//         <Label
//           for='exampleEmail'
//           sm={2}>
//           Email
//         </Label>
//         <p>{user.email}</p>
//         <Col sm={10}>
//           <Input
//             onChange={(event) => onChange(event)}
//             name='email'
//             // placeholder={user.email}
//             type='email'
//           />
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label
//           for='username'
//           sm={2}>
//           Email
//         </Label>
//         <Col sm={10}>
//           <p>{user.username}</p>
//           <Input
//             onChange={(event) => onChange(event)}
//             name='username'
//             // placeholder={user.username}
//             type='username'
//           />
//         </Col>
//         <Button onSubmit={submitProfile()} />
//       </FormGroup>
//     </Form>
//   );
// }

// // export async function getServerSideProps() {
// //   const { user } = useAuth();
// //   console.log(user);
// //   if (user) {
// //     return {
// //       props: user,
// //     };
// //   } else {
// //     <p> error </p>;
// //   }
// // }
