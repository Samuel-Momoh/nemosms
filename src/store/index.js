
import { createContext, useContext} from "react";
import { Redirect ,Route} from "react-router-dom";
import { useQuery} from '@apollo/client';
import { REFRESH} from "../queries";

export const CustomerContext = createContext([]);

export const useCustomer = () => useContext(CustomerContext);

export const CustomerWrapper = ({ children }) => {

 

  const { loading, error, data,startPolling,  } = useQuery(REFRESH,{fetchPolicy: 'no-cache'});
  if(data){
    // Change to fetch new data everytime before refresh minutes can work
    console.log(data.refresh_token.minutes)
    startPolling(data.refresh_token.minutes)
  }
  if(loading){
    return(
      <p>loading.........</p>
    )
  }
  if(error){
    return (
      <Route>
      <Redirect to="/auth/signin" />
      </Route>
    )
    
  }

  return (
    <CustomerContext.Provider value={{ data }}>
      {children}
    </CustomerContext.Provider>
  );
};
