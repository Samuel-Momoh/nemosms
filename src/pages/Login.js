import React from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../queries";

import { useMutation } from '@apollo/client';
import './css/style2.css'
import {Alert} from "react-bootstrap";
const axios = require('axios');


const Login = () => {

const [
  loginUser,
  { loading: mutationLoading, error: mutationError,data: mutationData },
] = useMutation(login,{errorPolicy: 'all'});

  const onSubmit = async (event) => {
    event.preventDefault();
    const [email, password] = event.target.elements;

    loginUser({ variables: { login: email.value, password: password.value } });
 
  };

  if (mutationData) {
    return <Redirect to="/" />;
  }
const test = () =>{
          const response =  axios.post('https://remitademo.net/remita/exapp/api/v1/send/api',
        {
          username: 'UzAwMDAzNDE2OTZ8MTA3ODc2NjM0OTMzfGU5NGY4YmRmZTFmN2QwNDljZTcxYTA5MzIyMWQxZGQ0ZjZjZDFkYTlmYmI1NzNjNDg2OTRmNjkxNDI2ZDYzMmMwYThlYzFjNjBkNTEzMmI2NzE2ZjM1ZDFhODk0ZDg2MTdkNWUxMzg2NTFlN2FhZjA1NDdmMTcyOWEwZTBlZjM3',
          password: '8fde825b6983806a051068d4e99eab5abc7434cf4a708f409a615ad6562ae850400147e23c347fbfedab376728a5f5b680c940a22a53791228086c9416d4caf7'
        }
        );
        console.log(response)
}

  return (
    <div id="body">
    <div id="page" style={{wdith:'100%',height:'100vh'}}>
    <ul class="cb-slideshow">
    <li><span>Image 01</span><div><h3>Mode-rato</h3></div></li>
        <li><span>Image 02</span><div><h3>com·po·sure</h3></div></li>
        <li><span>Image 03</span><div><h3>e·qua·nim·i·ty</h3></div></li>
        <li><span>Image 04</span><div><h3>Pres.to</h3></div></li>
        <li><span>Image 05</span><div><h3>qui·e·tude</h3></div></li>
        <li><span>Image 06</span><div><h3>Acce.le.rando</h3></div></li>
    </ul>
    <div class="container-fluid signup-form">
           <div class="row d-flex justify-content-center">
               <div class="col-md-8 col-sm-8 col-xs-12 col-xl-6">
               <form class="border p-5 form-container" onSubmit={onSubmit} id="signupForm">
               {/* <form class="border p-5 form-container" id="signupForm">  */}
            <p class="h4 mb-4 text-center form-title" >Nemosms Panel</p>
            <div id="alert">
            {mutationError && <Alert className="alert-with-icon" variant="danger">
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
{mutationError &&   mutationError.graphQLErrors.map((error,i)=>(error.message) )}
                  </span>
                </Alert> }
            </div>
      <div class="form-group">
        <input type="email"   id="inputEmail" class="form-control mb-4 form-input" placeholder="E-mail" name="email" />
      </div>
      <div class="form-group">
        <input type="password" id="inputPassword" class="form-control mb-4 form-input" placeholder="Password" name="password" />
      </div>
      <button class="btn btn-info btn-block my-4" type="submit" name="login_manager" id="btn" ><span id="btnText" style={{display: mutationLoading ? 'none': 'block'}}>Login</span>
     <div class="d-flex justify-content-center">
     {mutationLoading &&  <div class="spinner-border m-10 mx-spinner" role="status" id="spinner" ><span class="sr-only">Loading...</span></div>}
        </div>
      </button>
      <div class="text-left link-text">
        <Link to="/auth/reset">Reset Password </Link>
      </div>
      <div class="text-center link-text">
      <p>I Don't Have an Account
      <Link to="/auth/register">Sign Up </Link>
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

export default Login;
