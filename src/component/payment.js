
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
  import { PAYMENTS } from "../queries";
  function Payment() {
    const history = useHistory()
    const { loading: queryLoading, error: queryError, data: queryData,} = useQuery(PAYMENTS);
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
                <Card.Title as="h4">Payment Records</Card.Title>
                <p className="card-category">
                  Click On Payment To Print Reciept
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Transaction ID</th>
                      <th className="border-0">Service</th>
                      <th className="border-0">Channel</th>
                      <th className="border-0">Amount</th>
                      <th className="border-0">Date</th>
                      <th className="border-0">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  {queryData.payments.edges.map((payment, key) => {
                       return(
                        <tr>
                        <td>{payment.paymentid}</td>
                        <td>{payment.naration}</td>
                        <td>{payment.channel}</td>
                        <td>{payment.amount}</td>
                        <td>{payment.createdAt}</td>
                        <td>{payment.status}</td>
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
  
  export default Payment;
  