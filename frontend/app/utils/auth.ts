// bearbeitet von Marcia Perez Heilig

import axios from "axios";

export async function isAuthenticated(): Promise<boolean> {
    const token = localStorage.getItem("authToken");

    if (!token) {
        return false;
    }

    try {
        await axios.get("http://localhost:8084/api/auth/validate", {
            headers: { Authorization: `Bearer ${token}` },
        });
        return true;
    } catch {
        return false;
    }
}