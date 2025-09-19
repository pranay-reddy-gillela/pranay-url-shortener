import { nanoid } from "nanoid";
import { ShortURL } from "../models/shorturl.model.js";

export const createShortUrl = async (req, res) => {
    try {
        const { customUrl, expiresAt, originalUrl, title } = req.body;
        const userId = req.user.id;
        if (!originalUrl) {
            console.log("Long url not found !!!");
            return res.status(400).send({
                message: "Original url is required",
            });
        }
        let shortCode;
        if (customUrl) {
            shortCode = customUrl;
            const exist = await ShortURL.findOne({
                shortCode,
            });
            if (exist) {
                console.log("This shortCode already exist");
                return res.status(400).send({
                    message: "Please try another shortCode",
                });
            }
        } else {
            shortCode = nanoid(7);
            let exist = await ShortURL.findOne({
                shortCode,
            });
            while (exist) {
                shortCode = nanoid(7);
                exist = await ShortURL.findOne({
                    shortCode,
                });
            }
        }
        const newUrl = new ShortURL({
            originalUrl,
            shortCode,
            title,
            userId,
        });
        await newUrl.save();
        return res.status(201).send(
            newUrl
        );


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error ",
        });

    }
}


export const getLongUrl = async (req, res) => {
 try {


   const shortCode = req.params.shortcode;


   const exist = await ShortURL.findOne({shortCode:shortCode});


   if(!exist){
       console.log("Short code not found");
       res.status(404).send({ message : "BAD_REQUEST"});
   }


   return res.redirect  (exist.originalUrl); // by default the status code is 302
   // return res.redirect(301,exist.originalUrl);


 } catch (error) {
   console.error(error);
   return res.status(500).json({ message: "Internal server error "});
 }
};
