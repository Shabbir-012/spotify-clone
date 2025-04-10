import { User } from "../models/user.model.js";

export const authCallback = async (req, res) => {
    try {
      const { id, firstName, lastName, imageUrl } = req.body;
  
      const user = await User.findById({ clerkId: id });
  
      if (!user) {
        await User.create({
          clerkId: id,
          fullName: `${firstName} ${lastName}`,
          imageUrl,
        });
      }
  
      req.status(200).json({success: true});
  
    } catch (error) {
      console.log("Error in auth callback", error);
      res.status(500).json({ message: "Internal server error", error });
    }
  }