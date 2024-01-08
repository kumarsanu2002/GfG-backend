import express from "express";
import {
    pastCompt
} from "../controllers/pastComp.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
//routes for past competition
router.post("/new", isAuthenticated, pastCompt);


export default router;
