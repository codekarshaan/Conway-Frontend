import type { LoginResponse }
from "../types/auth";

const TOKEN_KEY = "token";

const USER_KEY = "user";

export const saveAuth = (
    response: LoginResponse
) => {

    localStorage.setItem(
        TOKEN_KEY,
        response.token
    );

    localStorage.setItem(
        USER_KEY,
        JSON.stringify(response)
    );
};

export const logout = () => {

    localStorage.removeItem(
        TOKEN_KEY
    );

    localStorage.removeItem(
        USER_KEY
    );
};

export const getToken = () => {

    return localStorage.getItem(
        TOKEN_KEY
    );
};

export const isAuthenticated = () => {

    return !!getToken();
};

export const getCurrentUser =
    (): LoginResponse | null => {

        const user =
            localStorage.getItem(
                USER_KEY
            );

        if (!user) {

            return null;
        }

        try {

    return JSON.parse(user);

} catch {

    return null;
}
    };

export const getRole =
    (): string | null => {

        return getCurrentUser()?.role ?? null;
    };

export const isSuperAdmin =
    (): boolean => {

        return getRole() ===
            "ROLE_SUPER_ADMIN";
    };