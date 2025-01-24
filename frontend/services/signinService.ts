// bearbeitet von Marcia Perez Heilig

import axios from "axios";

export async function signinUser(email: string, password: string): Promise<void> {
    const response = await axios.post("http://localhost:8084/api/signin", { email, password });

    if (response.status === 200) {
        const { token } = response.data;

        // Save the token in localStorage
        localStorage.setItem("authToken", token);
    } else {
        throw new Error("Login failed");
    }
}