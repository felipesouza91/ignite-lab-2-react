import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/cl4rnsrif1dk501z39trg7ay5/master',
  cache: new InMemoryCache(),
});
