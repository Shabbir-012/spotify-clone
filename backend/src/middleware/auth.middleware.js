import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
  if (!req.auth.userId) {
    res.status(401).json({ message: "Unauthorized. You must be logged in" });
    return;
  }
  next();
};

export const requireAdmin = async (req, res, next) => {
  try {
    const currentUser = await clerkClient.users.getUser(req.auth.userId);
    const isAdmin =
      process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress.emailAddress;

    if (!isAdmin) {
      res.status(403).json({ message: "Unauthoried. you must be admin" });
      return;
    }
    next();
  } catch (error) {
    return res.status(500).json({message: "Internal serval error", error});
    
  }
};
