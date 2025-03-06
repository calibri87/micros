import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'feature2',
  exposes: {
    './Module': 'apps/feature2/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
