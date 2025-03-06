import { ModuleFederationConfig } from '@nx/angular/module-federation';

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: [['feature1', 'http://localhost:4201'], ['feature2', 'http://localhost:4202']],
};

export default config;
