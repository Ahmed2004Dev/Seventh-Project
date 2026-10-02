import { Router } from "express";
import { addPost, deletePost, GetPosts, GetPostsAndComments } from "./post.service.js";
const router = Router();

router.post("/" , async (req,res,next)=>{
    const result = await addPost(req.body)
    return res.status(201).json({Massage : "Post created successfuly" , result})
})

router.delete("/:postID" , async (req,res,next)=>{
    const post_id = req.params.postID
    const result = await deletePost(post_id , req.body)
    return res.status(200).json({Massage : "Post Deleted successfuly" , result})
})

router.get("/posts" ,async (req,res,next)=>{
    const result = await GetPosts();
    return res.status(200).json({Message:"All Posts" , result})
})

router.get("/posts/comments" ,async (req,res,next)=>{
    const result = await GetPostsAndComments();
    return res.status(200).json({Message:"All Posts" , result})
})


export default router


