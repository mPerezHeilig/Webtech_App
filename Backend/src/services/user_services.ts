// bearbeitet von Marcia Perez Heilig

import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function registerUserService(email: string, password: string) {
    // Create and save the user
    const newUser = new User({ email, password });
    await newUser.save();
    return { email: newUser.email, id: newUser._id };
};

const JWT_SECRET = process.env.JWT_SECRET || "tokentest";
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || "15m";

export async function signinUserService(email: string, password: string): Promise<string | null> {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
        console.log("User not found");
        return null;
    }

    // Compare provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        console.log("Password mismatch");
        return null;
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    return token;
}