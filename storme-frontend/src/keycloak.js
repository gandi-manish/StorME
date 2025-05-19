import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://10.173.24.105:8080',
  realm: 'master',
  clientId: 'storme-client',
});

export default keycloak;
