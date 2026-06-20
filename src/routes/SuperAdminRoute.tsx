import {
    Navigate
} from "react-router-dom";

import {
    isSuperAdmin
} from "../services/authService";

type Props = {

    children: React.ReactNode;
};

function SuperAdminRoute(
    {
        children
    }: Props
) {

    if (
        !isSuperAdmin()
    ) {

        return (
            <Navigate
                to="/403"
                replace
            />
        );
    }

    return children;
}

export default SuperAdminRoute;