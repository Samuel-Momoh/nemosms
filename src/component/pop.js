import React from 'react'
import './stylesheet/pop.css';
import {NavLink} from "react-router-dom";
// import anime from 'animejs/lib/anime.es.js';
function Pop({ routes }) {
    const popToggle = () => {
        document.getElementById('hidden-menu').classList.toggle("hidnav");
      };
    return (
      <>
                 <div className="pop-sidebar">
                    <div className="hidden-menu hidnav" id="hidden-menu"> 
                    {/* {hiddnav()} */}
                    {routes.slice(4,6).map((prop, key) => {
                        if (!prop.redirect)
                          return (
                            <div className="items">
                              <NavLink
                                to={prop.layout + prop.path}
                                activeClassName="selected"
                                key={key}
                              >
                                <i className={prop.icon} />
                              </NavLink>
                              </div>
                          );
                        return null;
                      })}
                        {routes.slice(9,10).map((prop, key) => {
                        if (!prop.redirect)
                          return (
                            <div className="items">
                              <NavLink
                                to={prop.layout + prop.path}
                                activeClassName="selected"
                                key={key}
                              >
                                <i className={prop.icon} />
                              </NavLink>
                              </div>
                          );
                        return null;
                      })}

                    </div>
                    <div className="constant" onClick={popToggle}>
                        <i className="fa fa-plus"></i>
                    </div>
                 </div>
      </>
    )

}

export default Pop

