import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import {Link} from "react-router-dom";

const Nav = () => {
    const { keycloak, initialized } = useKeycloak();

    return (
        <>
            {keycloak.authenticated && (
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                    <div className="px-4 py-3" role="none">
                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                            {keycloak?.idTokenParsed.given_name}
                        </p>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                            {keycloak?.idTokenParsed.email}
                        </p>
                    </div>
                    <ul className="py-1" role="none">
                        <li>
                            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</Link>
                        </li>
                        <li>
                            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</Link>
                        </li>
                        <li>

                            <Link to="/" onClick={() => keycloak.logout()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</Link>
                        </li>
                    </ul>
                </div>
            )}


        </>
    );
};

export default Nav;