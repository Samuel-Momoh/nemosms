
// react-bootstrap components
import {
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useQuery} from '@apollo/client';
import {useHistory} from "react-router-dom";
import { MESSAGES } from "../queries";

function TableList() {
  // Message Delivery report
  const history = useHistory()
  const { loading: queryLoading, error: queryError, data: queryData,} = useQuery(MESSAGES);
  if(queryData){
    // Change to fetch new data everytime before refresh minutes can work
   
    console.log(queryData)
  }
  if(queryLoading){
    return(
      <p>loading.........</p>
    )
  }
  if(queryError){
 history.push('/auth/signin')
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Message Delivery</Card.Title>
                <p className="card-category">
                  This table include all messages as well as Api calls
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      {/* <th className="border-0">Reciever</th> */}
                      <th className="border-0">Cost</th>
                      <th className="border-0">Schedule</th>
                      <th className="border-0">Date</th>
                      <th className="border-0">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  {queryData.messages.edges.map((message, key) => {
                       return(
                        <tr>
                        <td>{key}</td>
                        {/* <td>{message.reciever}</td> */}
                        <td>1 Unit</td>
                        <td>{message.schedule}</td>
                        <td>{message.createdAt}</td>
                        <td>Delivered</td>
                      </tr>
                       )
                      
                      })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
