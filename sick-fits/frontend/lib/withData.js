import withApollo from 'next-with-apollo'; // gives us an HOC to expose our apollo client via a prop
import ApolloClient from 'apollo-boost'; // an offical package, has all the stadard things you would want for apollo
import { endpoint } from '../config';

function createClient({ headers }) { // function that takes in some headers, v important when we get into authentication
  return new ApolloClient({ // return a new client
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => { // on every request, include our credentials
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient); // export all of this with apollo
