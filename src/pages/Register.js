import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

import { Signup } from "../queries";

import { useMutation } from '@apollo/client';
import './css/style2.css'
import {Alert} from "react-bootstrap";

const Register = () => {
  const [
    SignupUser,
    { loading: mutationLoading, error: mutationError,data: mutationData },
  ] = useMutation(Signup,{errorPolicy: 'all'});
  
    const onSubmit = async (event) => {
      event.preventDefault();
      const [name, email, password,phone] = event.target.elements;

      console.log(name.value);
      console.log(email.value)
      console.log(password.value)
      console.log(phone.value)
      SignupUser({ variables: { name: name.value, email: email.value, password: password.value, phone: phone.value } });
   
    };
  
    if (mutationData) {
      return <Redirect to="/" />;
    }



  // if (customer) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div id="body">
    <div id="page" style={{wdith:'100%', height:'100vh'}}>
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
           <div class="col-md-8 col-sm-8 col-xs-12 col-xl-8">
           <form class="border p-5 form-container"  id="signupForm" onSubmit={onSubmit}>
        <p class="h4 mb-4 text-center form-title">Nemosms Panel</p>
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
        <div class="row">
        <div class="col-xl-12 ">
        <div class="form-group">
        <input type="text" id="name" class="form-control mb-4 form-input" placeholder="Fullname" name="name" />
    </div>
    <div class="form-group">
    <input  type="email"  id="inputEmail" class="form-control mb-4 form-input" placeholder="E-mail" name="email" />
    
    </div>
  <div class="form-group">
  <input type="password" id="inputPassword" class="form-control mb-4 form-input" placeholder="Password" name="password" />
  </div>
  <div class="form-group">
    <input type="phone" id="phone" class="form-control mb-4 form-input" placeholder="Phone Number" name="number" />
  </div>
        </div>
        </div>


  <div class="d-flex justify-content-between">
  <p class="link-text">By signning up automatically confirm that you have agree to Musixcloud <a href="#">Terms and Condition</a> </p>
  </div>
  <button class="btn btn-info btn-block my-4" type="submit" name="login_manager" id="btn" ><span id="btnText" style={{display: mutationLoading ? 'none': 'block'}}>Signup</span>
     <div class="d-flex justify-content-center">
     {mutationLoading &&  <div class="spinner-border m-10 mx-spinner" role="status" id="spinner" ><span class="sr-only">Loading...</span></div>}
    </div>
  </button>
  <div class="text-center link-text">
  <p>I Already Have an Account
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

export default Register;
