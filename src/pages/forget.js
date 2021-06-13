import React,{useState} from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import './css/style2.css'

import {  useMutation } from '@apollo/client';


const Forget = () => {
  // const [loader,setLoader] = useState(false)
  // const [addTodo, { data }] = useMutation(FORGOT_PASSWORD);


  const onSubmit = (event) => {
    event.preventDefault();
    const [email] = event.target.elements;
    // addTodo({ variables: { email: email.value } });
    // console.log(data)
  };


  return (
    <div id="body">
    <div id="page" style={{wdith:'100%',height:'100vh'}}>
    <ul className="cb-slideshow">
    <li><span>Image 01</span><div><h3>Mode-rato</h3></div></li>
        <li><span>Image 02</span><div><h3>com·po·sure</h3></div></li>
        <li><span>Image 03</span><div><h3>e·qua·nim·i·ty</h3></div></li>
        <li><span>Image 04</span><div><h3>Pres.to</h3></div></li>
        <li><span>Image 05</span><div><h3>qui·e·tude</h3></div></li>
        <li><span>Image 06</span><div><h3>Acce.le.rando</h3></div></li>
    </ul>
    <div className="container-fluid signup-form">
           <div className="row d-flex justify-content-center">
               <div className="col-md-8 col-sm-8 col-xs-12 col-xl-6">
               <form className="border p-5 form-container" onSubmit={onSubmit}>
            <p className="h4 mb-4 text-center form-title">Password Recovery</p>
            <div className="alert mx-success" role="alert" id="alert-success" style={{display: "none"}}>Follow the the link Sent to your email address to recover account</div>
      <div className="form-group">
        <input type="email" id="email" className="form-control mb-4 form-input" placeholder="E-mail" name="email" />
      </div>
            <button className="btn btn-info btn-block my-4" type="submit" name="recover_pass" id="btn">
            <span id="btnText">Reset</span>
            <div className="d-flex justify-content-center">
            <div className="spinner-border m-10 mx-spinner" role="status" id="spinner" style={{display: "none"}}>
             <span className="sr-only">Loading...</span>
            </div>
        </div>
            </button>
            <div className="text-center link-text">
              <p>I Have an Account
              <Link to="/auth/signin">Login</Link>
              </p>
            </div>
          </form>
              </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Forget;
