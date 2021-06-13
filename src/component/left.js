import React from 'react';
import './stylesheet/left.css'
import {
  Link,
  NavLink
} from "react-router-dom";
function Left({ routes }) {
        return (
    
            <div className='left'>
            <ul className='left-icons'>
              
            {routes.slice(0,6).map((prop, key) => {
            if (!prop.redirect)
              return (
                <li className='icon'>
                  <NavLink
                    to={prop.layout + prop.path}
                    activeClassName="selected"
                    key={key}
                   
                  >
                    <i className={prop.icon} />
                  </NavLink>
                </li>
              );
            return null;
          })}
            </ul>
            
            <ul className='right-icons'>
            {routes.slice(8,10).map((prop, key) => {
            if (!prop.redirect)
              return (
                <li className='icon'>
                  <NavLink
                    to={prop.layout + prop.path}
                    activeClassName="selected"
                    key={key}
                  >
                    <i className={prop.icon} />
                  </NavLink>
                </li>
              );
            return null;
          })}
            </ul>
              </div>

        );
    
}

export default Left;