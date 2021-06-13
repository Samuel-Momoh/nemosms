// import logo from './logo.svg';
import './App.css';
import './component/stylesheet/right.css'
import React from 'react';
import Left from "./component/left";
import FooterNav from "./component/footerNav";
import Pop from "./component/pop";
import 'bootstrap/dist/css/bootstrap.min.css';
import './fontawesome/css/all.css';
import {
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import { useQuery,useMutation} from '@apollo/client';
import { Container } from 'react-bootstrap';
import Header from './component/header'
import routes from "./routes.js";
import { REFRESH,LOGOUT } from "./queries";




const App =() =>  {
  const history = useHistory()
  const [LogOut, { result }] = useMutation(LOGOUT);
  const { loading, error, data, startPolling} = useQuery(REFRESH);
  if(data){
    // Change to fetch new data everytime before refresh minutes can work
   
    console.log(data.refresh_token.minutes)
    startPolling(data.refresh_token.minutes)
  }
  if(loading){
    return(
      <p>loading.........</p>
    )
  }
  if(error){
 history.push('/auth/signin')
  }
  

  const logout = () =>{
    LogOut()
    history.push('/auth/signin')
  }
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
    return ( 
<div className='body-container'>

<Left routes={routes}/>
<div className='right-container'>
{/* Header  */}

<Header logout={logout}/>
{/* Header Ends */}
{/* Body */}
<Container fluid className='scroll-margin'>

<Container fluid className='right-body'>

<Switch>{getRoutes(routes)}</Switch>
</Container>
{/* Body Ends */}

</Container>

</div>
<Pop routes={routes}/>
<FooterNav routes={routes}/>
</div>
      )
  
}

export default App;
