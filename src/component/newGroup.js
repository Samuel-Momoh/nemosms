import React, {useState} from 'react';
import './stylesheet/grouplist.css'
import { ReactMultiEmail } from 'react-multi-email';
import 'react-multi-email/style.css';

function Grouplist ()  {
const [emails, addemail] = useState([])
        const myStyle = {
            // borderBottom:"2px solid #edebe9",
            outline:"none",
            minHeight:'10rem'
        }
        return (
            <div  className='group-container'> 
                <div className='title' id='title'>
                <label data-name='label'> Import</label>
                <div className='input-group' id="title-input"><input type="text" placeholder="Enter  group title...." id="title" /></div>
                </div>
                <ReactMultiEmail
                style={myStyle}
                emails={emails}
                onChange={_emails => {
                  addemail(_emails);
                }}
                getLabel={(
                  email,
                  index,
                  removeEmail,
                ) => {
                  return (
                    <div key={index} className="tag">
                      {email}
                      <span name="delete" onClick={() => removeEmail(index)} className="">x</span>
                    </div>
                  );
                }}
              />
                <div className='send-area'>
                  <div className='save-btn'> 
                  <div className='btn-save' ><label>Save</label> </div>
                  </div>   
                </div>
          </div>
        );
    
   
}

export default Grouplist;