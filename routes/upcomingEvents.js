import express from "express";
import {
     Events
} from "../controllers/upcomingEvents.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
//posting suggestion
router.post("/new", isAuthenticated, Events);
//geting suggestion
// router.get("/my", isAuthenticated, getMyTask);


export default router;
