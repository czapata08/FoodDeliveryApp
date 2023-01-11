import {
  Button,
  Popover,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
  CloseButton,
  Badge,
} from "reactstrap";
import { useState, useContext } from "react";
import Cart from "./cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import AppContext from "./context";

export default function PopOver(props) {
  const [close, setClose] = useState(false);
  const { cart } = useContext(AppContext);

  return (
    <>
      <style jsx>
        {`
          a {
            color: white;
          }
          h5 {
            color: white;
            padding-top: 11px;
          }
          .cart-badge {
            padding: 0
              position: relative,
              left: -80px;
              top: -70px;
              opacity: 0.9;
              width: 0.4rem;
              font-size: 0.2rem;
          }
        `}
      </style>
      <div>
        <FontAwesomeIcon
          icon={faCartShopping}
          color='primary'
          id='popover644119284'
          type='button'
          onClick={() => setClose(true)}
        />
        <Badge className='cart-badge'>{props.total}</Badge>
        {close && (
          <UncontrolledPopover
            placement='top'
            target='popover644119284'>
            <PopoverBody>
              <CloseButton onClick={(e) => setClose(false)} />
              <Cart />
            </PopoverBody>
          </UncontrolledPopover>
        )}
      </div>
    </>
  );
}
