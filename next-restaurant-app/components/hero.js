import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardImgOverlay,
  CardGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function HeroSection(props) {
  return (
    // <Container fluid>
    //   <div
    //     className='jumbotron-fluid hero'
    //     style={{ padding: "0", margin: "0" }}>
    //     <style jsx>
    //       {`
    //         .hero {
    //           color: white;
    //           background-image: url("https://images.unsplash.com/photo-1438109491414-7198515b166b?q=80&fm=jpg&s=cbdabf7a79c087a0b060670a6d79726c");
    //           background-position: center;
    //           background-repeat: no-repeat;
    //           background-size: cover;
    //           height: 25vh;
    //         }
    //       `}
    //     </style>
    //   </div>
    // </Container>
    <div>
      <Card inverse>
        <CardImg
          alt='Card image cap'
          src={props.src}
          style={{
            height: 270,
            width: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <CardImgOverlay>
          <CardTitle tag='h5'>{props.title}</CardTitle>
          <CardText>{props.text}</CardText>
          <CardText>
            <small className='text-muted'>{props.textMuted}</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
}
