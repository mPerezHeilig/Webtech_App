// bearbeitet von Marcia Perez Heilig

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "tokentest";

export function authenticateToken(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }

    const token = authHeader.split(" ")[1];

    try {
        // Validate the token
        jwt.verify(token, JWT_SECRET); 
        next(); // Pass control to the next middleware or controller
    } catch (err: any) {
        if (err.name === "TokenExpiredError") {
            res.status(403).json({ message: "Token expired" });
        } else {
            res.status(400).json({ message: "Invalid token" });
        }
    }
}