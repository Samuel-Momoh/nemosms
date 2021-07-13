import { useState } from "react"; 
// react-bootstrap components
import {Button,Card,Form,Container,Row,Col,} from "react-bootstrap";
import './stylesheet/userdetails.css';
import {useHistory} from "react-router-dom";
import { useQuery} from '@apollo/client';
import { userDetail } from "../queries";
import Switch from 'react-bootstrap-switch';
import bg from '../img/banner-bg01.png';
import userImage from '../img/images.jpeg';
import {smsType} from './prices'
function User() {
  const history = useHistory();
  const { loading, error, data } = useQuery(userDetail);
  const[bottomModal,setBottomModal] = useState([false])
  var accountSwitch =(el, state) => {
    console.log("accountSwitch. elem:", el);
    console.log("name", el.props.name);
    console.log("new State:", state);
  }
  const [type, selectType] = useState({smsType:smsType});
  const Check = (id) =>{
    selectType({ smsType: type.smsType.map(type => {

      if(type.id == id){
        type.select = !type.select
      }else{
        type.select = false
      }
      return type;
    })})

  }
  if(data){
    console.log(data.user)
  }
  if(loading){
    return(
      <>
<Container fluid className="inapp-preloader-body">
      <div className="inapp-preloader-container">
      <div class="loadingio-spinner-ellipsis-k08wjsja6k"><div class="ldio-z383kca01p">
<div></div><div></div><div></div><div></div><div></div>
</div></div>
    </div>
</Container>
</>
    )
  }
  if(error){
 history.push('/auth/signin')
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          defaultValue={data.user.username}
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Phone Number</label>
                        <Form.Control
                          defaultValue="08067103944"
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          defaultValue={data.user.email}
                          disabled
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue={data.user.name.split(' ')[0]}
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue={data.user.name.split(' ')[1]}
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                   <Row>
                    <Col md="12">
                    <label>Account Setting</label>
                    <Row>
                    {type.smsType.map((type, key) => {
                            return(
                         <Col className="pr-1" md="3">
                         <Form.Group>
                           <label>{type.groupId}</label>
                           <Form.Control
                           onClick={()=>Check(type.id)}
                             defaultValue="Mike"
                             placeholder="City"
                             type="checkbox"
                             key={key}
                             checked={type.select? true:false}
                             className="account-settings-check"
                           ></Form.Control>
                         </Form.Group>
                       </Col>
                            );
                      })}
                      
                    </Row>
                    </Col>
                  </Row>

                
                  <div className="button-container mr-auto ml-auto">
                  <Button
                    className="btn recharge"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
               {/*<div class="d-flex justify-content-center">
      {mutationLoading &&  <div class="spinner-border m-10 mx-spinner" role="status" id="spinner" ><span class="sr-only">Loading...</span></div>} 
     <div class="spinner-border m-10 mx-spinner" role="status" id="spinner" ><span class="sr-only">Loading...</span></div>
        </div>
        */}
                  </Button>
              <div className="btn recharge" onClick={()=>{
                setBottomModal(!bottomModal)
              }}>Change Password</div>
              </div>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={bg}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={userImage}
                    ></img>
                  </a>
                  <p className="description">{data.user.name}</p>
                </div>
                    <div className="user-caps">
                    {/* Caps-details One */}
                    <div className="caps-details">
                    <p className="caps-text-title"> Balance</p>
                    <p className="caps-texts"> 300</p>
                    </div>
                    {/* Caps-details Three */}
                    <div className="caps-details">
                    <p className="caps-text-title"> Username</p>
                    <p className="caps-texts "> u9yyi8</p>
                    </div>
                      {/* Caps-details Two */}
                      <div className="caps-details">
                    <p className="caps-text-title"> Status</p>
                    <p className="caps-texts "> <Switch name="acct-status" onText="Active" offText="Inactive" value={true} /></p>
                    </div>

                    {/* Caps-details Form */}
                    <div className="caps-details">
                    <p className="caps-text-title"> API Status</p>
                    <p className="caps-texts "> <Switch onChange={(el, state) => accountSwitch(el, state)} name="acct-type" onText="Live" offText="Test" defaultValue={true} /> </p>
                    </div>
                  </div>
                <div className='dev-auth'>
                <h1>Public Key</h1>
                <div className='key-details'> 
                <div className='key'>1bb328b6a02a7242f0fef6e75bee513d-3f413a9c-0b2c-4761-8654-e3cd83746025</div>
                <span className="holder">
                  <span className="copy-text">
                    copied
                  </span>
                  <i className='fa fa-copy'></i>
                  </span>
                </div>
            </div>
              </Card.Body>
              <div className="button-container mr-auto ml-auto">
              <div className="btn recharge"> Recharge Now </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
<div className="bottom-modal" style={{display: bottomModal ? "none":null}} 
onClick={()=>{
  setBottomModal(!bottomModal)
}}
>
<div className="bottom-modal-container"
onClick={(e)=>{
  e.stopPropagation();
}}
>
<div className="bottom-modal-top">
Password Update
</div>
<div className="bottom-modal-body">
<div className="bottom-modal-content">
<form className="bottom-modal-form">

  <div className="bottom-input-item">
    <input type="text" placeholder="Enter New Password"/>
  </div>

  <div className="bottom-input-item">
    <input type="text"  placeholder="Confirm New Password"/>
  </div>

  <Button
    className="btn pwd-upd"
    type="submit"
    variant="info"
    >
    Update Password
    {/*<div class="d-flex justify-content-center">
      {mutationLoading &&  <div class="spinner-border m-10 mx-spinner" role="status" id="spinner" ><span class="sr-only">Loading...</span></div>} 
     <div class="spinner-border m-10 mx-spinner" role="status" id="spinner" ><span class="sr-only">Loading...</span></div>
        </div>
        */}
  </Button>

</form>
</div>
</div>
</div>
</div>
    </>
  );
}

export default User;
