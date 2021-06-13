import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import {  useMutation } from '@apollo/client';
import './css/style2.css'

const Activate = () => {


    // const [loader, setLoader] = useState(false)
    // const [resetPassword, { data }] = useMutation(RESET_PASSWORD);
    const onSubmit = (event) => {
        event.preventDefault();
        // const [email] = event.target.elements;
        // resetPassword({ variables: { email: email.value,password: "@Samuel",token:"1lJvWsFrc1v0AFsORPclRF9O3XCDrK0i61wkod3ofp6b2z2yGeoRFFruCBfhDK0s5K4tVkh3leA" } });
        // console.log(data)

      
    };

    return (
        <div id="body">
            <div id="page" style={{ wdith: '100%', height: '100vh' }}>
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
                            <form class="border p-5 form-container" onSubmit={onSubmit}>
                                <p class="h4 mb-4 text-center form-title">Password Recovery</p>
                                <div class="alert mx-success" role="alert" id="alert-success" style={{display: "none"}}>Follow the the link Sent to your email address to recover account</div>
                                <div class="form-group">
                                    <input type="email" id="email" class="form-control mb-4 form-input" placeholder="E-mail" name="email" />
                                </div>
                                <button class="btn btn-info btn-block my-4" type="submit" name="recover_pass" id="btn">
                                    <span id="btnText">Reset</span>
                                    <div class="d-flex justify-content-center">
                                        <div class="spinner-border m-10 mx-spinner" role="status" id="spinner" style={{display: "none"}}>
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </button>
                                <div class="text-center link-text">
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

export default Activate;
