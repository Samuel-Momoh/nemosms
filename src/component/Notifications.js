import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react-bootstrap components
import {
  Alert,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useQuery} from '@apollo/client';
import {useHistory} from "react-router-dom";
import { NOTIFICATIONS} from "../queries";

function Notifications() {
  const history = useHistory()
  const [showModal, setShowModal] = React.useState(false);
  const notificationAlertRef = React.useRef(null);
  const { loading: queryLoading, error: queryError, data: queryData,} = useQuery(NOTIFICATIONS);
  if(queryData){
    // Change to fetch new data everytime before refresh minutes can work
   
    console.log(queryData)
  }
  if(queryLoading){
    return(
      <p>loading.........</p>
    )
  }
  if(queryError){
 history.push('/auth/signin')
  }
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Light Bootstrap Dashboard React</b> - a beautiful
            freebie for every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  
  return (
    <>
      <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as="h4">Notifications</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md="12">
                {/* <h5>
                  <small>Notifications Style</small>
                </h5> */}
                    {queryData.notifications.edges.map((notification, key) => {
                       return(
                        <Alert className="alert-with-icon" variant="info">
                        <button
                          aria-hidden={true}
                          className="close"
                          data-dismiss="alert"
                          type="button"
                        >
                          <i className="nc-icon nc-simple-remove"></i>
                        </button>
                        <span
                          data-notify="icon"
                          className="nc-icon nc-bell-55"
                        ></span>
                        <span>
                        {notification.message}
                        </span>
                      </Alert>
                       )
                      
                      })}
             
              </Col>
            </Row>
            <br></br>
            <br></br>
          </Card.Body>
        </Card>
      
      </Container>
    </>
  );
}

export default Notifications;
