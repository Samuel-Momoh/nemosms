import React from 'react'
import './stylesheet/footerNav.css';
import { Container, Row,Col } from 'react-bootstrap';
import {
    NavLink
  } from "react-router-dom";
  import './plugins/animate.min.css';
export default function Footer({ routes }) {
    return (
      <>
       <Container fluid className='footerNav-container'>
            <Row className="row-content">
              <Col xl={12} xs={12} sm={12} md={12} lg={12}>
                  <Row className="row-center">
                        {routes.slice(0,5).map((prop, key) => {
                        if (!prop.redirect)
                          return (
                            <Col xs={3} sm={3} md={3} className="nav-icons "> 
                              <NavLink
                                to={prop.layout + prop.path}
                                activeClassName="selected"
                                key={key}
                              >
                                <i className={prop.icon} />
                              </NavLink>
                              </Col> 
                          );
                        return null;
                      })}  
                  </Row>
              </Col>
            </Row>
          </Container> 
      </>
    )
  
}
