import mongoose from "mongoose"
const { Schema } =  mongoose

const UrlSchema = new Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL:{
        type: String,
        required: true
    },
    visitHistory: [{timestamp: {type: Number}}]
},{
    timestamps: true
}
);

const URL = mongoose.model("url", UrlSchema);
export {URL}