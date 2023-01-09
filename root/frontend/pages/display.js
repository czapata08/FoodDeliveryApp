import { Row, Col, Container, Card, CardGroup } from "reactstrap";
import { useAuth } from "../lib/auth2";

function DishesDisplay() {

  const {user} = useAuth();
    console.log(`user ${JSON.stringify(user)}`)

  return (
    <>
      <Container>
        <Row>
          <div clasName='col-xl-3 col-md-6 mb-4'>
            <div className='card border-0 shadow'>
              <img
                src='https://source.unsplash.com/TMgQMXoglsM/500x350'
                class='card-img-top'
                alt='...'
              />
              <div className='card-body text-center'>
                <h5 className='card-title mb-0'>Team Member</h5>
                <div className='card-text text-black-50'>Web Developer</div>
              </div>
            </div>
          </div>
          <div clasName='col-xl-3 col-md-6 mb-4'>
            <div className='card border-0 shadow'>
              <img
                src='https://source.unsplash.com/TMgQMXoglsM/500x350'
                class='card-img-top'
                alt='...'
              />
              <div className='card-body text-center'>
                <h5 className='card-title mb-0'>Team Member</h5>
                <div className='card-text text-black-50'>Web Developer</div>
              </div>
            </div>
          </div>
          <div clasName='col-xl-3 col-md-6 mb-4'>
            <div className='card border-0 shadow'>
              <img
                src='https://source.unsplash.com/TMgQMXoglsM/500x350'
                class='card-img-top'
                alt='...'
              />
              <div className='card-body text-center'>
                <h5 className='card-title mb-0'>Team Member</h5>
                <div className='card-text text-black-50'>Web Developer</div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default DishesDisplay;
