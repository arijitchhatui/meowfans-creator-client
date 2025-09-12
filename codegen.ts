import { CodegenConfig } from '@graphql-codegen/cli';
import { configService } from './util/config';

const config: CodegenConfig = {
  schema: configService.NEXT_PUBLIC_BASE_URL,
  documents: ['packages/gql/**/*.ts'],
  generates: {
    './packages/gql/generated/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  },
  ignoreNoDocuments: true
};

export default config;
