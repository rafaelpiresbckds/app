import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8080/auth",
    realm: "app",
    clientId: "app_react",
});

export default keycloak;