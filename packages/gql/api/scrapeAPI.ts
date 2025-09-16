import { graphql } from '../generated';

export const GET_SCRAPE_QUERY = graphql(`
  query Initiate($input: CreateScrapeInput!) {
    initiate(input: $input)
  }
`);
