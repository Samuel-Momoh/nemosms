import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from './reduxStore.js'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forget from "./pages/forget";
import Activate from "./pages/activate";
import { CustomerWrapper } from "./store";
import {apolloClient} from "./client/";

import { ApolloProvider} from '@apollo/client';


ReactDOM.render(
  <React.StrictMode>
<ApolloProvider client={apolloClient}>
<Provider store={store}>
<BrowserRouter>
    <Switch>
    <Route path="/auth/activate" component={Activate} />
    <Route path="/auth/reset" component={Forget} />
    <Route path="/auth/signin" component={Login} />
    <Route path="/auth/register" component={Register} />
      <Route path="/admin" render={(props) => <App {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>
  </Provider>
  </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
