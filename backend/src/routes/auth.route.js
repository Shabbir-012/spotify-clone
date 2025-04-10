import { Router } from "express";


const router = Router();

router.get("/", (req,res) => {
    res.send("auth route with GET Method");
})

export default router;