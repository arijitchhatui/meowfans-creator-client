export const configService = {
  get NEXT_PUBLIC_BASE_URL() {
    return process.env.NEXT_PUBLIC_BASE_URL!;
  },
  get NEXT_PUBLIC_BASE_GRAPHQL_URL() {
    return process.env.NEXT_PUBLIC_BASE_GRAPHQL_URL!;
  }
};
