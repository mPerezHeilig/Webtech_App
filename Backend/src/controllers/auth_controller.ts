// bearbeitet von Marcia Perez Heilig

import { Request, Response } from "express";
import { registerUserService, signinUserService } from "../services/user_services";

export async function registerUser(req: Request, res: Response) {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        // Call the service to handle user registration
        const newUser = await registerUserService(email, password);
        return res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (err: any) {
        if (err.code === 11000) {
            // MongoDB duplicate key error for unique fields
            return res.status(409).json({ message: "User already exists" });
        }
        console.error("Error in registerUser:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export async function signinUser(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const token = await signinUserService(email, password);

        if (!token) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Return the token in the response
        return res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        console.error("Error in loginUser:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};