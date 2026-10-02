import { Router } from "express";
import { signup, update, userByEmail, userByid } from "./user.service.js";
const router = Router();
 
router.post("/signup", async (req, res, next) => {
    const result = await signup(req.body)
    return res.status(201).json({ Massage: "user added successfuly", result })
})

router.patch("/:userID", async (req, res, next) => {
    const result = await update(req.params.userID, req.body)
    return res.status(201).json({ Massage: "user created or updated successfuly" })
})

router.get("/profile", async (req, res, next) => {
    const {email} = req.query
    const result = await userByEmail(email);
    return res.status(200).json({ Massage: "Done", result })
})

router.get("/profile/:userID", async (req, res, next) => {
    const id = req.params.userID
    const result = await userByid(id);
    return res.status(200).json({ Massage: "Done", result })
})

export default router