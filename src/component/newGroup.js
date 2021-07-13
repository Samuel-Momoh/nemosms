import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import { useMutation } from '@apollo/client';
import {
  Link,
  useHistory
} from "react-router-dom";
import './stylesheet/grouplist.css'
import { NEW_CONTACT } from "../queries";

function Grouplist ()  {
  const History = useHistory()
  const [
    new_contact,
    { loading: mutationLoading, error: mutationError,data: mutationData },
  ] = useMutation(NEW_CONTACT,{errorPolicy: 'all'});

        const onSubmit = (event) => {
          event.preventDefault();
          const [name, num] =  event.target.elements

          new_contact({ variables: { name: name.value, number: num.value } });
          if(!mutationError){
            History.push('../admin/groups')
          }
        };
        const myStyle = {
          // borderBottom:"2px solid #edebe9",
          outline:"none",
          minHeight:'10rem'
      }
        return (
          <div>
            <div className="Nsearch-bar">
            <div className="search-icon" style={{marginLeft: "10px"}}><Link to='../admin/groups' ><i className="fa fa-arrow-left"></i></Link></div>
            </div>
          <form  className='create-contact-form' onSubmit={onSubmit}>
           <div className="create-contact-avatar-input">
          <i className="fa fa-user"></i>
           </div>
            <div className='create-contact-details'>
              <input type='text' placeholder='Name' name='name' />
              <input type='text' placeholder='Phone' name='num' />
              <Button
    className="btn pwd-upd"
    type="submit"
    variant="info"
    >
       {/*<div class="d-flex justify-content-center">
      {mutationLoading &&  <div class="spinner-border m-10 mx-spinner" role="status" id="spinner" ><span class="sr-only">Loading...</span></div>} 
     <div class="spinner-border m-10 mx-spinner" role="status" id="spinner" ><span class="sr-only">Loading...</span></div>
        </div>
        */}
    Add Contact
  </Button>
            </div>
          </form>
        </div>
        );
    
   
}

export default Grouplist;