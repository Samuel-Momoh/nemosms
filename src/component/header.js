import React from 'react';
import './stylesheet/header.css'
import { Container, Row,Col } from 'react-bootstrap';
import {
 useLocation
  } from "react-router-dom";
  import routes from "../routes.js";


const Header =(props)=> {
  const location = useLocation();

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

        return (
            <Container fluid className='right-header'>
            <Row>
                {/* Header right */}
              <Col xl={10} xs={8} sm={8} md={10} lg={10} >
              <ul className='header-left'>
                  <li>
                <p id="header-title">{getBrandText()}</p>
                  </li>
              </ul>
              </Col>
            {/* Header left */}
              <Col xl={2} xs={4} sm={4} md={2} lg={2}>
                  <Row>
                        <Col xl={4} xs={4} sm={4} md={4} lg={4} className="header-icons"> 
                            <Row>
                                <Col xl={2} xs={2} sm={2} md={2} lg={2} style={{position: 'relative'}}>
                                <p className=" text-warning new-notification-count">8</p>
                                <i className="far fa-bell text-warning base"></i>
                                </Col> 
                            </Row>
                        </Col> 
                        <Col xl={4} xs={4} sm={4} md={4} lg={4} className="header-icons">
                        <Row>
                                <Col xl={2} xs={2} sm={2} md={2} lg={2}>
                                <i className="fa fa-lock text-warning tip"></i>
                                <i className="far fa-comment text-warning base"></i>
                                </Col>
                            </Row>
                        </Col> 
                        <Col xl={4} xs={4} sm={4} md={4} lg={4} className="header-icons">
                        <Row>
                              
                                <Col xl={2} xs={2} sm={2} md={2} lg={2} onClick={props.logout}>
                                <i className="fa fa-power-off power-btn"></i>
                                </Col>
                            </Row>
                        </Col> 
                  </Row>
              </Col>
            </Row>
          </Container> 
        )
    
}

export default Header;