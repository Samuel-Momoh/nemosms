

import { useState } from "react";
import "./stylesheet/pay.css"
import {Alert,Card,Container,Row,Col,} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import { useQuery, useMutation} from '@apollo/client';
import RemitaPayment from "react-remita";
import { InterswitchPay } from 'react-interswitch'
import { userDetail,SAVE_PAYMENT } from "../queries";
import {priceList} from './prices'
const axios = require('axios');

  function Pay() {
  const history = useHistory();

const { loading: queryLoading, error: queryError, data: queryData } = useQuery(userDetail);

const [SavePayment,{ loading: mutationLoading, error: mutationError,data: mutationData },] = useMutation(SAVE_PAYMENT,{errorPolicy: 'all'});

const [prices, selectPrice] = useState({priceList:priceList});

const [due, setTotal] = useState({total: 0})

if(queryData){
  console.log(queryData.user.email)
}
if(queryLoading){
  return(
    <p>loading.....</p>
  )
}
if(queryError){
history.push('/auth/signin')
}
    // Remita
    const paymentData = {
      key: "UzAwMDAzNDE2OTZ8MTA3ODc2NjM0OTMzfGU5NGY4YmRmZTFmN2QwNDljZTcxYTA5MzIyMWQxZGQ0ZjZjZDFkYTlmYmI1NzNjNDg2OTRmNjkxNDI2ZDYzMmMwYThlYzFjNjBkNTEzMmI2NzE2ZjM1ZDFhODk0ZDg2MTdkNWUxMzg2NTFlN2FhZjA1NDdmMTcyOWEwZTBlZjM3", // enter your key here
      customerId: queryData.user.username,
      firstName: queryData.user.name.split(' ')[0],
      lastName: queryData.user.name.split(' ')[1],
      email: queryData.user.email,
      amount: due.total,
      narration: " Account Funding",
    };
// Remita Responses
let paymentres = {
  ...paymentData,
  onSuccess: function (response) {
    // function callback when payment is successful
    console.log("callback Successful Response", response);
    SavePayment({ variables: {paymentid: response.transactionId.toString(), channel: "Remita", name: queryData.user.name, email: queryData.user.email, amount: response.amount.toString(), naration: "Account Topup",status: "paid"}})
  },
  onError: function (response) {
    // function callback when payment fails
    console.log("callback Error Response", response);
  },
  onClose: function () {
    // function callback when payment modal is closed
    console.log("closed");
  },
};
    // Inter-Switch
    const paymentParameters = {
      merchantCode: 'MX51256',
      payItemID: 'Default_Payable_MX51256',
      customerName: queryData.user.name,
      customerID: queryData.user.username,
      customerEmail: queryData.user.email,
      redirectURL: 'http://localhost:3000/admin/pay',
      text: 'Pay With Quickteller',
      mode: 'TEST',
      transactionReference: Date.now().toString(),
      amount: (due.total * 100).toString(),
      style: {
          width: '200px',
          height: '40px',
          border: 'none',
          color: '#fff',
          backgroundColor: '#ff0000'
      },
      callback: (response) => {
        SavePayment({ variables: {paymentid: response.txnref.toString(), channel: "Quickteller", name: queryData.user.name, email: queryData.user.email, amount: response.apprAmt.toString(), naration: "Account Topup",status: "paid"}})
      }
    }
    const Check = (id) =>{
      selectPrice({ priceList: prices.priceList.map(price => {
        if(price.id == id){
          price.select = !price.select
          if(price.select == true){
            setTotal({ ...due, total: due.total + price.amount })
          }else{
            setTotal({ ...due, total: due.total - price.amount })
          }
        }
        return price;
      })})

    }

    return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Fund Account</Card.Title>
                </Card.Header>
                <Card.Body>
                <Alert className="alert-with-icon" variant="info">
                        <span>
                       This details are generate from your user acoount, Feel free to edit to prefered Choice.
                       </span>
                       <span>
                       Note: Details are What will apppear on the reciept after payment
                        </span>
                      </Alert>
                    <Row>
                      <Col className="pr-1" md="5">
                          <label>First Name</label>
                        <input type="text" value={queryData.user.name.split(' ')[0]} />

                      </Col>
                      <Col className="px-1" md="3">

                          <label>Last Name</label>
                          <input type="text" value={queryData.user.name.split(' ')[1]} />
                      </Col>
                      <Col className="pl-1" md="4">

                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <input type="text" value={queryData.user.email} />
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">

                          <label>Select Amount</label>
                          <Alert className="alert-with-icon" variant="info">
                      
                        <span>  Kindly Select the amount of credit you desire, multiple selection is possible</span>
              <br/>
              <span>  Note: </span>
              <span>   i. The highest cummulative amount that is payable via this channel is $131800 </span>
              <span> ii. For payment with Visa Card Please Select Remita</span>
                      
                      </Alert>
                          <Row>
                          {prices.priceList.map((price, key) => {
                            return(
                         <Col lg="2" md="3" sm="4" xs="6">
                         <div className="btn pricing" style={{background: price.select? "#0078d4": "#fff",color: price.select? "#fff": "#0078d4" }} key={key} onClick={()=>Check(price.id)}>${price.amount} Credit</div>
                         </Col>
                            );
                      })}
                       </Row>
<Row>
  <Col md="4">Total: {due.total}</Col>
</Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">

                          <label>Make Payment With: </label>
                          <Row>
                         <Col lg="2" md="3" sm="4" xs="6">
                         <RemitaPayment
                          remitaData={paymentres}
                          className='btn' // class to style the button
                          text='Pay with Remita' //text to show on button
                          // add a 'live' prop to use the live urls/keys
                         />
                         </Col>
                         <Col lg="2" md="3" sm="4" xs="6">
                         <InterswitchPay {...paymentParameters} />
                         </Col>
                       </Row>

                      </Col>
                    </Row>

                </Card.Body>
              </Card>
            </Col>
            
          </Row>

        </Container>
      </>
    );
  }
  
  export default Pay;
  