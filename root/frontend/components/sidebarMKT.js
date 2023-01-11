import { Card, CardTitle, CardText, Button } from "reactstrap";

export default function SideBar() {
  return (
    <div>
      <Card
        body
        className='my-2'
        style={{
          width: "auto",
        }}>
        <CardTitle tag='h5'>Promotion</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button color='warning'>Go somewhere</Button>
      </Card>
      <Card
        body
        className='text-center'
        style={{
          width: "auto",
        }}>
        <CardTitle tag='h5'>Promotion</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button color='warning'>Go somewhere</Button>
      </Card>
      <Card
        body
        className='text-end my-2'
        style={{
          width: "auto",
        }}>
        <CardTitle tag='h5'>Promotion</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button color='warning'>Go somewhere</Button>
      </Card>
    </div>
  );
}
