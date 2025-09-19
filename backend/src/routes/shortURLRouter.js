import { Router } from "express";
import { isLoggedIn } from "../middlewares/authMiddleware.js";
import { createShortUrl, getLongUrl } from "../controllers/shortUrlController.js";

const shortURLRouter = Router();

shortURLRouter.post("/",isLoggedIn,createShortUrl)

shortURLRouter.get("/:shortcode",getLongUrl)

export default shortURLRouter;
