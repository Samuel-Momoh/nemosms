
import './stylesheet/groups.css'
import { Container, Row,Col,Card,Alert } from 'react-bootstrap';
import {
  Link,
  useHistory
} from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';
import { CONTACTS, DELETE_CONTACT } from "../queries";
function Groups() {
  const history = useHistory()
  const { loading: queryLoading, error: queryError, data: queryData,} = useQuery(CONTACTS);

  const [
    deleteContact,
    { loading: mutationLoading, error: mutationError,data: mutationData },
  ] = useMutation(DELETE_CONTACT,{errorPolicy: 'all'});

  // if(queryData){
  //   // Change to fetch new data everytime before refresh minutes can work
   
  //   // console.log(queryData)
  // }

  if(queryLoading){
    return(
<>
<Container fluid className="inapp-preloader-body">
      <div className="inapp-preloader-container">
      <div class="loadingio-spinner-ellipsis-k08wjsja6k"><div class="ldio-z383kca01p">
<div></div><div></div><div></div><div></div><div></div>
</div></div>
    </div>
</Container>
</>
    )
  }

  if(queryError){
 history.push('/auth/signin')
  }

  const deleteBtn = (id) =>{
  console.log(id)
  deleteContact({ variables: { id: id } });
  }
        return (
          <>
          <Container fluid style={{padding: "0px"}}>
          <Row>
          <Col lg="12" sm="12">
          <div className="search-bar">
            <div className="search-icon" style={{marginLeft: "10px"}}><i className="fa fa-search"></i></div>
            <div className="search-input"><input type="text" /></div>
            <Link to="/admin/add-group">
            <div className="search-icon" style={{marginRight: "10px"}}><i className="fa fa-user-plus"></i> </div>
            </Link>
          </div>
            </Col>
          </Row>
          <div className="select-bar" style={{display: "none"}}>
            
            <div className="select-container">

              <div className="selected-left">
              <i className="fa fa-chevron-left"></i>
              <p>1 Selected</p>
              </div>

              <div className="selected-right">

                <div className="select-all">
                  <input type="checkbox"  />
                </div>
             
              </div>

              </div>

            </div>

        <Row style={{marginTop: "10px", height: "70vh",overflowY: "scroll"}}>
        {queryLoading &&  <p>loading.........</p>}
        {queryData.contacts.edges.map((contact, key) => {
                     return(
                      <Col md="12" key={contact.id}>
                      <Alert className="alert-with-icon" variant="info" style={{borderRadius: "10px"}}>
                      <button
                        aria-hidden={true}
                        className="close contact-tick"
                        data-dismiss="alert"
                        type="button"
                        style={{display: "none"}}
                        // value={contact.id}
                        // onClick={()=>{
                        //   deleteBtn(contact.id)
                        // }}
                      >
                        <i className="fa fa-check"></i>
                      </button>

                      <span
                        data-notify="icon"
                        className="nc-icon nc-single-02"
                      ></span>
                      <div>
                        <p className="contact-title">
                       <strong> {contact.name}</strong>
                        </p>
                        <span>{contact.number}</span>
                      </div>
                    </Alert>
           
            </Col>
                     )
                    
                    })}
          </Row> 
        </Container>  
        <div className="pop-send-menu" style={{display: "none"}}>
            <div className="send-menu-container">
                    <div className="send-menu-item">
                      <i className="fa fa-trash"></i>
                    </div>
                    <div className="send-menu-item">
                      <i className="fa fa-paper-plane"></i>
                    </div>
            </div>
        </div>
        </>
        );
    
}

export default Groups;