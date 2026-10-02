import { postModel } from "../../../DB/models/post.model.js"
import { Model } from 'sequelize';
import { userModel } from "../../../DB/models/user.model.js";
import { comModel } from "../../../DB/models/com.model.js";
import { sequelizeDB } from "../../../DB/connectDB.js";


export const addPost = async (inputs) => {
    const { userID, title, content } = inputs
    const newPost = postModel.build({ userID, title, content });
    await newPost.save()
    return newPost
}

export const deletePost = async (postID, inputs) => {
    const { userID } = inputs
    const SearchPost = await postModel.findByPk(postID);
    if (!SearchPost) {
        throw new Error("Post not found", { cause: { status: 404 } })
    }
    await SearchPost.save()
    if (String(SearchPost.userID) !== String(userID)) {
        throw new Error("You are not the owner of this post", { cause: { status: 403 } })
    }
    await SearchPost.destroy();
}

export const GetPosts = async () => {
    const allposts = await postModel.findAll({
        attributes: ["p_id", "p_title"],
        include: {
            model: userModel,
            attributes: ["u_id", "u_name"]
        },
    })
    return allposts
}

export const GetPostsAndComments = async () => {
    const allpostsAndComments = await postModel.findAll({
        
        attributes: [
            "id",      
            "title",   
            [sequelizeDB.fn("COUNT", sequelizeDB.col("comModels.com_id")), "commentsCount"]
        ],
        include: {
            model: comModel, 
            as: "comModels",  
            attributes: []   
        },
        group: ["postModel.p_id"]
    });
    return allpostsAndComments;
}


