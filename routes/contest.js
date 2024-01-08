import express from "express";
import {
    CONTEST
} from "../controllers/contest.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
//routes for past competition
router.post("/new", isAuthenticated, CONTEST);


export default router;
