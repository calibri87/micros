import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'feature1',
  exposes: {
    './Module': 'apps/feature1/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
