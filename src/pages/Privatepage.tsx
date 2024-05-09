import React from 'react';
import { useKeycloak } from "@react-keycloak/web";


const Privatepage = () => {
    const { keycloak, initialized } = useKeycloak();


    return (
        <div>
            <h1 className="text-green-800 text-4xl">Welcome to the Private
               <br/> {keycloak?.idTokenParsed?.email}
            </h1>


        </div>
    );
};

export default Privatepage;


