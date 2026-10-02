import { Op } from "sequelize"
import { comModel } from "../../../DB/models/com.model.js"
import { userModel } from "../../../DB/models/user.model.js"
import { postModel } from "../../../DB/models/post.model.js"

export const addComment = async (content, postID, userID) => {
    const Addcom = comModel.build({ content, postID, userID })
    await Addcom.save()
    return Addcom
}

export const updateComment = async (commentID, content, userID) => {
    // Handle if comment not foundS
    const checkComment = await comModel.findByPk(commentID);
    if (!checkComment) {
        throw new Error("Comment Not Found", { cause: { status: 404 } })
    }
    // Check authorize
    if (String(checkComment.userID) !== String(userID)) {
        throw new Error("Authorize Wrong", { cause: { status: 403 } })
    }
    // Update data actually
    const updateCom = await comModel.update({ content }, {
        where: { com_id: commentID }
    })
    return updateCom
}

export const findCommit = async (content, userID, postID) => {
    const findcom = await comModel.findOrCreate({
        where: { content, userID, postID },
        defaults: { content, userID, postID }
    })
    return findcom
}

export const searchCommit = async (word) => {
    const result = await comModel.findAndCountAll({
        where: { content: { [Op.like]: `%${word}%` } }
    })
    return result
}

export const GetLastCommits = async (postID) => {
    const result = await comModel.findAll({
        where: { postID },
        order: [["createdAt", "DESC"]],
        limit: 3
    })
    return result
}

export const GetCommitsWithPostIDAndUserID = async (ComentID) => {
    const result = await comModel.findByPk(ComentID, {
        include: [
            {
                model: userModel,
                attributes: ["id", "name", "email"]
            },
            {
                model: postModel,
                attributes: ["id", "title", "content"]
            }
        ]
    })
    return result
}