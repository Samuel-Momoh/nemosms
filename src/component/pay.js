

import { useState } from "react";
import "./stylesheet/pay.css"
import {Container,ProgressBar} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import { useQuery, useMutation} from '@apollo/client';
import RemitaPayment from "react-remita";
import { InterswitchPay } from 'react-interswitch'
import { userDetail,SAVE_PAYMENT } from "../queries";
import {priceList} from './prices'
import accepted from  '../img/accepted_card2.jpeg'
const axios = require('axios');

  function Pay() {
  const history = useHistory();

const { loading: queryLoading, error: queryError, data: queryData } = useQuery(userDetail);

const [SavePayment,{ loading: mutationLoading, error: mutationError,data: mutationData },] = useMutation(SAVE_PAYMENT,{errorPolicy: 'all'});

const [prices, selectPrice] = useState({priceList:priceList});

const [due, setTotal] = useState({total: 0})
const[bottomModal,setBottomModal] = useState([false])

if(queryData){
  console.log(queryData.user.email)
}
if(queryLoading){
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
      text: 'Quickteller',
      mode: 'TEST',
      transactionReference: Date.now().toString(),
      amount: (due.total * 100).toString(),
      className:'btn quikteller',
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
var stepOne= true;
var stepTwo= false;
var stepThree= false;
    return (
      <>
        <Container fluid>
          <p className="payment-notice">You Order will be processed after the payment has been confirmed</p>
          {/* USER Information */}
          <div className="payment-title"> User Information</div>
          <div className="payment-caps">
            {/* Caps-details One */}
            <div className="caps-details">
            <p className="caps-text-title"> FirstName</p>
            <p className="caps-text"> {queryData.user.name.split(' ')[0]}</p>
            </div>
              {/* Caps-details Two */}
              <div className="caps-details">
            <p className="caps-text-title"> LastName</p>
            <p className="caps-text"> {queryData.user.name.split(' ')[1]}</p>
            </div>
          </div>
          {/* SELECT AMOUNT */}
          <div className="payment-title"> Top-up Amount</div>
          {/* <p className="payment-notice">Select Your Desire Top-up Amount From The Price List </p> */}
          <div className="payment-caps">
            <div className="price-list">
          {prices.priceList.map((price, key) => {
                            return(
                         <div className="btn pricing" style={{background: price.select? "#0078d4": "#fff",color: price.select? "#fff": "#0078d4" }} key={key} onClick={()=>Check(price.id)}>₦{price.amount}</div>
                            );
                      })}
                      </div>
          </div>
                            {/* Order Summary */}
          <div className="payment-title"> Order Summary</div>
          <div className="payment-caps">
            {/* Caps-details One */}
            <div className="caps-details">
            <p className="caps-text-title"> Service Price</p>
            <p className="caps-text">₦ {due.total}</p>
            </div>
                        {/* Caps-details Two */}
                        <div className="caps-details">
            <p className="caps-text-title"> Sms Unit</p>
            <p className="caps-text"> {due.total / 2}</p>
            </div>
                            {/* Caps-details Three */}
            <div className="caps-details">
            <p className="caps-text-title"> Nemotel Discount</p>
            <p className="caps-text"> ₦ 0.00</p>
            </div>
                          { /* Caps-details Four */}
            <div className="caps-details">
            <p className="caps-text-title"> Nemotel Service Fee</p>
            <p className="caps-text"> ₦ 0.00</p>
            </div>
            { /* Caps-details Five */}
            <div className="caps-details">
            <p className="caps-text-title"> Amount Due</p>
            <p className="caps-text"> ₦ {due.total}</p>
            </div>
          </div>
                    {/* Checkout Method */}
          <div className="payment-title"> Checkout Method</div>
          <div className="payment-caps">
            <img src={accepted} alt="nemotel accepted cards" className="img-fluid accepted-img"/>
            <div className="checkout">
                <div className="method">
                <RemitaPayment
                          remitaData={paymentres}
                          className='btn remita' // class to style the button
                          text='Remita' //text to show on button
                          // add a 'live' prop to use the live urls/keys
                  />
                </div>
                <div className="method">
                <InterswitchPay {...paymentParameters} />
                </div>
            </div>
          </div>
          
        </Container>
        <div className="bottom-modal " 
        style={{display: 'none'}}
         style={{display: bottomModal ? "none":null}} 
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
Please Wait
</div>
<div className="bottom-modal-body">
<div className="bottom-modal-payment-content">
  
<div className="order-progress-container">
  
<ProgressBar now={50} style={{height: '4px'}} className="step-progress-bar" />

< div className="step-container">

{/* Order Step One */}
<div className="step-tag">
<div className="order-step">

<div className="waiting-preloader" style={{display: stepOne? null:"none"}}>
<div  className="waiting-item"></div>
<div  className="waiting-item"></div>
<div  className="waiting-item"></div>
<div  className="waiting-item"></div>
</div>
<i className="fa fa-check" style={{display: stepOne? "none":null}}></i>
</div>
<label>Paid</label>
</div>
{/* Order Step One */}
<div className="step-tag">
<div className="order-step">
<div className="waiting-preloader" style={{display: stepTwo? null:"none"}}>
<div  className="waiting-item"></div>
<div  className="waiting-item"></div>
<div  className="waiting-item"></div>
<div  className="waiting-item"></div>
</div>
<i className="fa fa-check" style={{display: stepTwo? "none":null}}></i>
</div>
<label>Confirmed</label>
</div>
{/* Order Step One */}
<div className="step-tag">
<div className="order-step">
<div className="waiting-preloader" style={{display: stepThree? null:"none"}}>
<div  className="waiting-item"></div>
<div  className="waiting-item"></div>
<div  className="waiting-item"></div>
<div  className="waiting-item"></div>
</div>
<i className="fa fa-check" style={{display: stepThree? "none":null}}></i>
</div>
<label>Completed</label>
</div>

</div>
</div>

</div>
</div>
</div>
</div>

      </>
    );
  }
  
  export default Pay;
  