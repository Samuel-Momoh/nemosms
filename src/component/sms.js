import React,{useState} from 'react';

import "./stylesheet/light-bootstrap-dashboard-react.css";
import "./stylesheet/demo.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions/";
import DateTimePicker from 'react-datetime-picker';
import {Card,Modal,Container,Row,Col,} from "react-bootstrap";
import { ReactMultiEmail } from 'react-multi-email';
import 'react-multi-email/style.css';
import './stylesheet/sms.css';
import NotificationAlert from "react-notification-alert";
import { useMutation} from '@apollo/client';
import { SEND_MESSAGE } from "../queries";
const Sms = () => {

  const [sendMessage,{ loading: mutationLoading, error: mutationError,data: mutationData },] = useMutation(SEND_MESSAGE,{errorPolicy: 'all'});
if(mutationError){
  console.log("error")
}
    const counter = useSelector(state => state.smscounter);
    const dispatch = useDispatch()
    const [options, setOption] = useState(false)
    const [date, setDate] = useState(new Date())
    const [scheduleModal,setScheduleModel] = useState(false)
    const [numbers, addNumber] = useState([])
    const notificationAlertRef = React.useRef(null);
    const myStyle = {
      // borderBottom:"2px solid #edebe9",
      outline:"none",
      width: "calc(100%)"
  }
  var sender = document.getElementById('sender')
  var msg = document.getElementById('msg')
  // Reset Function
  var reset = () =>{
    sender.value = msg.value  ='';
    addNumber([])
  }
  // Submit Function

  var sendSms = () => {
    let data = {
      sender: sender.value,
      reciever: numbers,
      msg: msg
    }
    sendMessage({ variables: {sender: sender.value, reciever: numbers.toString(), text: msg.value, schedule: "immediately"}})

    console.log(data);
    reset();
  
  }
  var sendLater = () => {
    let data = {
      sender: sender,
      reciever: numbers,
      msg: msg.value,
      schedule:date
    }
    console.log(data);
    sendMessage({ variables: {sender: sender.value, reciever: numbers.toString(), text: msg.value, schedule: date}})
    reset();
    setScheduleModel(!scheduleModal)
  }
  const notify = () => {
    var options = {};
    options = {
      place: "br",
      message: (
        <div>
          <div>
            Welcome to <b>Light Bootstrap Dashboard React</b> - a beautiful
            freebie for every web developer.
          </div>
        </div>
      ),
      type: "primary",
      icon: "nc-icon nc-bell-55",
      autoDismiss: 100,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
        return (
          <div className="sms-container">
                <div className='msg-container'> 
                  <div className='recipient' id='recipient'>
                  <label className='to'  data-name='label'> Import</label>
                  <div className='num-group'> <input type="text" placeholder="Enter sender numbers...." id="sender" /></div>
                  </div>
                  <div className='sender'>
                  <ReactMultiEmail
                style={myStyle}
                emails={numbers}
                onChange={_numbers => {
                  addNumber(_numbers);
                }}
                getLabel={(
                  email,
                  index,
                  removeEmail,
                ) => {
                  return (
                    <div key={index} className="tag">
                      {email}
                      <span name="delete" onClick={() => removeEmail(index)} className="delete">x</span>
                    </div>
                  );
                }}
                 />
                  </div>
                  {/* message */}
                  <div className='msg-body'>
                  <textarea className='msg'  maxLength='160' id="msg" onChange={(e) => dispatch(increment(e.target.value.length))}></textarea>
                  </div>
                  {/* Send Area */}
                  <div className='send-area'>
                  <div className='send-btn'> 
                  <div className='send-options'>
                  <ul className='options' style={{display: options ? 'block':'none' }}>
                    <li onClick={sendSms}> Send </li>
                    <li onClick={setScheduleModel}>Send later</li>
                  </ul>
                  </div>
                  <div className='btn1' onClick={sendSms}><label>Send</label> </div>
                  <div className='seperator'></div>
                  <div className='btn2'  id='btnOptions' onClick={() => setOption(!options)}><i className='fa fa-angle-up'></i></div>
                  </div>
                    <div className='char'>Character: <span>{counter}</span></div> 
                </div>
      
                </div>
                       {/* Preview */}
              
    {/* <div id="wrapper" style={{perspective: "1300px"}}>
    <div className="phone view_2" id="phone_1" >
      <iframe src="http://designhooks.com" id="frame_1"></iframe>
    </div>
    </div> */}
                <Modal
          className="modal-mini modal-primary"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={false}
          >
          <Modal.Header className="justify-content-center">
          <div className="modal-profile">
          <i className="nc-icon nc-circle-09"></i>
          </div>
          </Modal.Header>
          <Modal.Body>
          {/* <p>Always have an access to your profile</p> */}
          <Container fluid>
          <Row>
          <Col md="12">
          <Card>
          <Card.Header>
            <Card.Title as="h4">100 Contacts Found</Card.Title>
            <p className="card-category">
              Select the list of contacts and click Insert
            </p>
          </Card.Header>
          <Card.Body className="all-icons">
            <Row>
              <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6" >
              <div className="font-icon-detail">
              <div className='tick'>
              <i className='fa fa-check'></i>
              </div>
                <i className="nc-icon nc-air-baloon"></i>
                <p>Wedding</p>
              </div>
            </Col>
            </Row>
          </Card.Body>
          </Card>
          </Col>
          </Row>
          </Container>
          </Modal.Body>
          <div className="modal-footer">
          <div className='send-btn'> 
              <div className='btn1'><i className='fa fa-check'></i> </div>
              <div className='seperator'></div>
              <div className='btn2' ><i className='fa fa-times'></i></div>
              </div>
          </div>
          </Modal>
        <Modal
          className=" modal-primary"
          show={scheduleModal}
          size='md'
          aria-labelledby="contained-modal-title-vcenter"
          // centered
          onHide={setScheduleModel}
          >
          <Modal.Header className="justify-content-center">
            <div className="modal-profile">
              <i className="nc-icon nc-bulb-63"></i>
            </div>
          </Modal.Header>
          <Modal.Body className="text-center">
          <DateTimePicker
        onChange={setDate}
        value={date}
        disableClock={true}
        minDate={new Date()}
        name="schedule"
        className="schedule"/>
          </Modal.Body>
          <div className="modal-footer">
          <div className='send-btn'> 
                  <div className='btn1'  onClick={sendLater}><label>Send</label></div>
                  <div className='seperator'></div>
                  <div className='btn2' onClick={() => setScheduleModel(!scheduleModal)}><i className='fa fa-times'></i></div>
                  </div>
          </div>
        </Modal>
        {/* End Modal */}
        <NotificationAlert ref={notificationAlertRef} />
                </div>    
                
        );
    }
    


export default Sms;