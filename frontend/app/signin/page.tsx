// bearbeitet von Marcia Perez Heilig

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormGroup from "@/components/Form/FormGroup";
import styles from "@/css/page.module.css";
import form_styles from "@/css/form.module.css";
import btn_styles from "@/css/button.module.css";
import Button from "@/components/Buttons/Button";
import { signinUser } from "@/services/signinService";

export default function SigninPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            await signinUser(email, password);
            router.push("/showtrips");
        } catch (err: any) {
            const message =
                err.response?.data?.message ||
                "An unexpected error occurred. Please try again later.";
            setError(message);
        }
    };

    return (
        <div id={styles.main}>
            <h1>Travel Planner</h1>
            <div className={styles.displaycard}>
                <form className={form_styles.tripForm} onSubmit={handleSubmit}>
                    <FormGroup
                        formgroup={{
                            label: "E-Mail:",
                            type: "text",
                            name: "email",
                            placeholder: "Type your E-Mail",
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <FormGroup
                        formgroup={{
                            label: "Password:",
                            type: "password",
                            name: "password",
                            placeholder: "Type your Password",
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Display error message */}
                    {error && <p className={form_styles.errorText}>{error}</p>}

                    <Button
                        button={{
                            text: "Sign In",
                            className: btn_styles.alarmButton,
                            type: "submit",
                        }}
                    />
                </form>
            </div>
        </div>
    );
}