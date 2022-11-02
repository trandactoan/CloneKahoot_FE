import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { getUserById } from "../../api/userApi";
const queryClient=new QueryClient();
function GetUserIfExist(){
  const {data, error, isLoading}=useQuery(["currentUser"], ()=>{
    if(localStorage.getItem("_id"))
    {
      getUserById(localStorage.getItem("_id"));
    }
  });
  if(isLoading)
  {
    return <div>Please wait the query is loading</div>
  } 
  if(error){
    return <div>The response is error by {error.message}</div>
  }
  return(
    <div>{data}</div>
  )
}
function HomePage(){
  return (
      <div>
        <h1>THIS IS HOMEPAGE</h1>
      <QueryClientProvider client={queryClient}>
        <GetUserIfExist />
      </QueryClientProvider>
      </div>
  )
}
export default HomePage;