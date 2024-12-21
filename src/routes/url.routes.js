import express from "express"
import { urtshort, redirect} from "../controller/url.controller.js"
const router = express();

router.route("/short").post(urtshort)
router.route("/redirect/:shortid").post(redirect);



export default router