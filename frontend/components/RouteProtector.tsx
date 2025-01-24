// bearbeitet von Marcia Perez Heilig

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/app/utils/auth";

interface RouteProtectorProps {
    // Component that renders if authentificated
    children: React.ReactNode; 
}

export default function RouteProtector({ children }: RouteProtectorProps) {
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function checkAuth() {
            const authStatus = await isAuthenticated();
            setIsAuth(authStatus);
            setLoading(false);

            if (!authStatus) {
                router.push("/signin");
            }
        }

        checkAuth();
    }, [router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <>{isAuth && children}</>;
}