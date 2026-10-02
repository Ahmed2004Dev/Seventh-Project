import { Router } from "express";
import { addComment, findCommit, GetCommitsWithPostIDAndUserID, GetLastCommits, searchCommit, updateComment } from "./com.service.js";
const router = Router();

router.post("/" , async (req,res,next)=>{
    const {content , postID , userID} = req.body
    const result =await addComment(content , postID , userID)
    return res.status(200).json({Massage : "Comment Created" , result})
})

router.patch("/updateComment" , async (req,res,next)=>{
    const {commentID ,content , userID} = req.body
    const result =await updateComment(commentID ,content , userID)
    return res.status(201).json({Massage : "Comment updated" , result})
})

 router.post("/find_or_create" , async (req,res,next)=>{
    const {content , userID , postID} = req.body
    const result =await findCommit(content , userID , postID)
    return res.status(201).json({Massage : "Done" , result})
})

router.get("/searchComment/" , async (req,res,next)=>{
    const {word} = req.query
    const result =await searchCommit(word)
    return res.status(200).json({Massage : "Done" , result})
})

router.get("/Search/:postID" , async (req,res,next)=>{
    const {postID} = req.params
    const result =await GetLastCommits(postID)
    return res.status(200).json({Massage : "Done" , result})
})

router.get("/SearchAddPostUser/:commentID" , async (req,res,next)=>{
    const {commentID} = req.params
    const result =await GetCommitsWithPostIDAndUserID(commentID)
    return res.status(200).json({Massage : "Done" , result})
})


export default router