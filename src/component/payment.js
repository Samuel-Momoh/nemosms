
// react-bootstrap components
import {
  Container,

  } from "react-bootstrap";
  import "./stylesheet/report.css"
  import { useQuery} from '@apollo/client';
  import {useHistory} from "react-router-dom";
  import { PAYMENTS } from "../queries";
  import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
  function Payment() {
    const history = useHistory()
    const { loading: queryLoading, error: queryError, data: queryData,} = useQuery(PAYMENTS);
    if(queryData){
      // Change to fetch new data everytime before refresh minutes can work
     
      console.log(queryData)
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
    // {
    //   id: 'Id', // Required because our accessor is not a string
    //   Header: 'id',
    //   accessor: 'id'
    // }, 
    {
    Header: 'Transaction ID',
    accessor: 'paymentid' // String-based value accessors!
  }, {
    Header: 'Service',
    accessor: 'naration'
  }, 
  {
    Header: 'Channel',
    accessor: 'channel'
  },
  {
    Header: 'Amount',
    accessor: 'amount'
  },
  {
    Header: 'Date',
    accessor: 'createdAt'
  },
  {
    Header: 'Status',
    accessor: 'status'
  },
]
    return (
      <>
      <Container fluid>

        <ReactTable
    data={queryData.payments.edges}
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
  
  export default Payment;
  