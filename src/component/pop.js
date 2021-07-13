import React from 'react'
import './stylesheet/pop.css';
import {NavLink} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { togglepopMenue } from "../actions/";
function Pop({ routes }) {
  const popState = useSelector(state => state.popMenue);
  const dispatch = useDispatch()
  
    return (
      <>
                 <div className="pop-sidebar">
                    <div className="hidden-menu"  style={{display: popState ? null:'none' }}> 
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
                    <div className="constant" 
                    onClick={(e) => {
                      e.stopPropagation()
                      dispatch(togglepopMenue())
                     
                    }}
                    >
                        <i className="fa fa-plus"></i>
                    </div>
                 </div>
      </>
    )

}

export default Pop

