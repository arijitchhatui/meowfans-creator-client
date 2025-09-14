'use client';

import { authCookieKey } from '@/lib/constants';
import { configService } from '@/util/config';
import { ApolloLink, HttpLink } from '@apollo/client';
import { ApolloClient, ApolloNextAppProvider, InMemoryCache } from '@apollo/client-integration-nextjs';
import { getCookie } from 'cookies-next';

function makeClient() {
  const httpLink = new HttpLink({
    uri: `${configService.NEXT_PUBLIC_BASE_GRAPHQL_URL}`,
    fetchOptions: { cache: 'no-store' }
  });

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext((headers = {}) => ({
      headers: {
        ...headers,
        Authorization: `Bearer ${getCookie(authCookieKey)}`
      }
    }));
    return forward(operation);
  });

  return new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache()
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
