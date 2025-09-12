import { authCookieKey } from '@/lib/constants';
import { configService } from '@/util/config';
import { ApolloLink, HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache, registerApolloClient } from '@apollo/client-integration-nextjs';
import { getCookie } from 'cookies-next';

export const { getClient } = registerApolloClient(() => {
  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext((headers = {}) => ({
      headers: {
        ...headers
      },
      Authorization: `Bearer ${getCookie(authCookieKey)}`
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
