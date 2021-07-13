import React from 'react';
import "./stylesheet/light-bootstrap-dashboard-react.css";
// import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  // Badge,
  // Button,
  Card,
  // Navbar,
  // Nav,
  // Table,
  Container,
  Row,
  Col,
  // Form,
  // OverlayTrigger,
  // Tooltip,
} from "react-bootstrap";
class Service extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return(
            <Container fluid>
            <Row>
              <Col lg="3" sm="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-chart text-warning"></i>
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">SMPP Account</p>
                          <Card.Title as="h4">₦ 1,345</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <i className="fas fa-redo mr-1"></i>
                      Buy Now
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg="3" sm="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-light-3 text-success"></i>
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Long Number</p>
                          <Card.Title as="h4">₦ 1,345</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <i className="far fa-calendar-alt mr-1"></i>
                      Buy Now
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg="3" sm="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-vector text-danger"></i>
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Short Number</p>
                          <Card.Title as="h4">₦ 1,345</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <i className="far fa-clock-o mr-1"></i>
                      Buy Now
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg="3" sm="6">
                <Card className="card-stats">
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-favourite-28 text-primary"></i>
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">USSD</p>
                          <Card.Title as="h4">₦ 1,345</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <i className="fas fa-redo mr-1"></i>
                      Buy Now
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
           
            
          </Container>
        )
    }
}

export default Service;