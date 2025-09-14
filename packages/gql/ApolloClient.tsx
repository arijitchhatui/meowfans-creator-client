import { configService } from '@/util/config';
import { BearerAccessToken } from '@/util/helpers';
import { ApolloLink, HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache, registerApolloClient } from '@apollo/client-integration-nextjs';

export const { getClient } = registerApolloClient(() => {
  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext((headers = {}) => ({
      headers: {
        ...headers
      },
      Authorization: BearerAccessToken()
    }));
    return forward(operation);
  });

  const httpLink = new HttpLink({
    uri: configService.NEXT_PUBLIC_BASE_GRAPHQL_URL,
    fetchOptions: { cache: 'no-store' }
  });

  return new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache()
  });
});
