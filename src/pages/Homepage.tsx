import React from 'react';
import {useKeycloak} from "@react-keycloak/web";
import Privatepage from "./Privatepage";
import {Link} from "react-router-dom";


const Homepage = () => {
    const { keycloak, initialized} = useKeycloak();


    return (
        <div>
            {!keycloak.authenticated && (
            <a onClick={() => keycloak.login()} >Login</a>
            )}
            {keycloak.authenticated && (

            <a onClick={() => keycloak.logout()} >sair</a>
    )}



    <h1 className="text-green-800 text-4xl">Welcome to the Homepage</h1>
            <br/>
            <Link to="/private">Rota </Link>

        </div>
    );
};

export default Homepage;
