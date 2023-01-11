import { useContext, useState } from "react";
import Head from "next/head";
import AppContext from "../components/context";
import Layout from "../components/layout";
import Cookie from "js-cookie";
import { AuthProvider } from "../lib/auth2";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/client";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/globals.css";

function MyApp(props) {
  var { cart, addItem, removeItem, cleanCart } = useContext(AppContext);
  const [state, setState] = useState({ cart: cart });
  const { Component, pageProps } = props;

  addItem = (item) => {
    let { items } = state.cart;
    //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++
    let foundItem = true;
    if (items.length > 0) {
      foundItem = items.find((i) => i.id === item.id);

      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }
    console.log(`Found Item value: ${JSON.stringify(foundItem)}`);
    // if item is not new, add to cart, set quantity to 1
    if (!foundItem) {
      //set quantity property to 1

      let temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
        items: [...state.cart.items, temp],
        total: state.cart.total + item.price,
      };
      setState({ cart: newCart });
      console.log(`Total items: ${JSON.stringify(newCart)}`);
    } else {
      // we already have it so just increase quantity ++
      console.log(`Total so far:  ${state.cart.total}`);
      newCart = {
        items: items.map((item) => {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, { quantity: item.quantity + 1 });
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price,
      };
    }
    setState({ cart: newCart }); // problem is this is not updated yet
    console.log(`state reset to cart:${JSON.stringify(state)}`);
  };
  removeItem = (item) => {
    let { items } = state.cart;
    //check for item already in cart
    const foundItem = items.find((i) => i.id === item.id);
    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map((item) => {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, { quantity: item.quantity - 1 });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price,
      };
      //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else {
      // only 1 in the cart so remove the whole item
      console.log(`Try remove item ${JSON.stringify(foundItem)}`);
      const index = items.findIndex((i) => i.id === foundItem.id);
      items.splice(index, 1);
      var newCart = { items: items, total: state.cart.total - item.price };
    }
    setState({ cart: newCart });
  };

  cleanCart = () => {
    let newCart = {
      items: 0,
      total: 0,
    };
    setState({ cart: newCart });
  };
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css'
        />
      </Head>
      <ApolloProvider client={client}>
        <AuthProvider>
          <AppContext.Provider
            value={{
              cart: state.cart,
              addItem: addItem,
              removeItem: removeItem,
              cleanCart: cleanCart,
            }}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AppContext.Provider>
        </AuthProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
