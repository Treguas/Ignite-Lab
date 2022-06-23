import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { Event } from './pages/Event';
import { useEffect } from "react";
import { client } from "./lib/apollo";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
