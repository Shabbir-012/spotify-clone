import { Router } from "express";


const router = Router();

router.get("/", (req,res) => {
    req.auth.userId
    res.send("user route with GET Method");
})

export default router;