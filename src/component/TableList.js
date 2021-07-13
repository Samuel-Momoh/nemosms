
// react-bootstrap components
import {
  Container,
} from "react-bootstrap";
import "./stylesheet/report.css"
import { useQuery} from '@apollo/client';
import {useHistory} from "react-router-dom";
import { MESSAGES } from "../queries";
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'

function TableList() {
  // Message Delivery report
  const history = useHistory()
  const { loading: queryLoading, error: queryError, data: queryData,} = useQuery(MESSAGES);
  if(queryData){
    // Change to fetch new data everytime before refresh minutes can work
   
    console.log(queryData.messages.edges)
  }
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

  // React Table 6 Setup
  const columns = [
    {
      Header: 'Sender Name',
      accessor: 'sender'
    }, 
    {
    Header: 'Date Sent',
    accessor: 'createdAt' // String-based value accessors!
  }, 
  {
    Header: 'Date Recieved',
    accessor: 'createdAt'
  }, 
  {
    Header: 'Reciever',
    accessor: 'reciever'
  }, 
  {
    Header: 'Status',
    accessor: 'schedule'
  },
  {
    Header: 'Cost',
    accessor: 'text'
  },
]

  return (
    <>
      <Container fluid>

        <ReactTable
    data={queryData.messages.edges}
    resolveData={data => data.map(row => row)}
    columns={columns}
    defaultPageSize={10}
    sortable={true}
    multiSort={true}
    resizable={true}
    className={"delivery_report"}

  />
      </Container>
    </>
  );
}

export default TableList;
