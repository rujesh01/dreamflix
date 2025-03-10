"use server";
export const authMiddleware = (req: Request): void => {
    const token = req.headers.get("authorization");

    if (!token) {
        throw new Error("Unauthorized: No token provided");
    }
};
