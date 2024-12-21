import { asyncHandler } from "../utils/asyncHandler.js";
import { URL } from "../models/url.model.js";
import shortidLibrary from "shortid"; 

const urtshort = asyncHandler(async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.json({ message: "URL is required" });
    }
    const shortId = shortidLibrary.generate(); // Use the generate() method from the imported shortid library
    const urlStore = await URL.create({
        shortId: shortId,
        redirectURL: url,
        visitHistory: []
    });
    if (!urlStore) {
        return res.status(400).json({ error: "URL not stored" });
    }
    return res.status(200).json({ message: "URL stored successfully" });
});

const redirect = asyncHandler(async (req, res) => {

    const shortid = req.params.shortid;
    console.log("Short ID:", shortid);
   

    try {
        console.log(shortid);
        const entry = await URL.findOneAndUpdate(
            { shortid },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    },
                },
            },
            { new: true }
        );
        if (entry) {
            res.redirect(entry.redirectURL);
        } else {
            res.status(404).send("URL not found");
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
});






export { urtshort, redirect};
