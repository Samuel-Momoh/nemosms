import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import './stylesheet/userdetails.css';
class UserDetails extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return(
<Container fluid className='user-details-conatiner'>
<Row>
<Col className='user-left' xl={10} xs={10} sm={10} md={10} lg={10}>
<div className='basic-detail'>
    <h1>Hi Samuel</h1>
    <span>samueldan@gmail.com</span>
</div>
<div className='dev-auth'>
    <h1>Public Key</h1>
    <div className='key-details'> 
    <div className='key'>1bb328b6a02a7242f0fef6e75bee513d-3f413a9c-0b2c-4761-8654-e3cd83746025</div>
    <span><i className='fa fa-copy'></i></span>
    </div>
</div>
</Col>
<Col className='user-right' xl={2} xs={2} sm={2} md={2} lg={2}>
<div className='balance-detail'>
    <div className='balance'>
    <h1>$300</h1>
    </div>
<button className='recharge-btn'>Recharge</button>
</div>
</Col>
</Row>
</Container>
        )
    }
}

export default UserDetails;