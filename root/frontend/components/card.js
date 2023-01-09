//create card
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardGroup,
  CardSubtitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function ProductCard(props) {
  return (
    <>
      <CardGroup>
        <Card>
          {/* <CardImg
            alt='Card image cap'
            src='/../imagesRestaurant/Karma.png'
            top
            width='100%'
          /> */}
          <CardBody>
            <CardTitle tag='h5'>Card title</CardTitle>
            <CardSubtitle
              className='mb-2 text-muted'
              tag='h6'>
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
}

export default ProductCard;
