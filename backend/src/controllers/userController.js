import { User } from "../models/user/user.model.js";


export const getProfileData = async(req, res) => {
    try {
        const userId = req.user.id;
         if (!userId) {
            return res.status(401).json({ message: "User not authenticated." });
        }

        const presentUser = await User.findById(userId);
        console.log(presentUser);
        if (!presentUser) {
            return res.status(404).json({ message: "User not Found." });
        }
        res.status(200).json(presentUser);
    } catch (error) {
        console.log("Error Fetching user Details",error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}