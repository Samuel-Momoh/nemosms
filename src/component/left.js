import React from 'react';
import './stylesheet/left.css'
// import MaterialIcon from 'material-icons-react';
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
                      <i className='fa fa-lock' style={{position:"absolute",left: "50%", top: "-8px", transform: 'translateX(-50%)', fontSize: "12px", display: prop.layout + prop.path=="/admin/notifications"? null: 'none'}}/>
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