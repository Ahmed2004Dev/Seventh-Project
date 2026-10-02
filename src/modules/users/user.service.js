
import { userModel } from "../../../DB/models/user.model.js"



export const signup = async (inputs) => {
    const { name, email, password, role } = inputs

    const checkuser = await userModel.findOne({ where: { email } })
    if (checkuser) {
        throw new Error("Email Exist", { cause: { status: 409 } })
    }

    const user = userModel.build({ name, email, password, role })
    await user.save()
    return user

}

export const update = async (userID,inputs) => {
    const user = await userModel.update(
        inputs
        , { where: { id: userID }, validate: false })
    if (!user[0]) {
        throw new Error("Invalid Email", { cause: { status: 404 } })
    }
    return 
}

export const userByEmail = async (email)=>{
    const user = await userModel.findOne({where : {email}})
   if (!user) {
        throw new Error("No user found", { cause: { status: 404 } })
    }
    return user
}

export const userByid = async (id)=>{
    const user = await userModel.findByPk(id, {
        attributes : {exclude : ["role"]}
    })
   if (!user) {
        throw new Error("No user found", { cause: { status: 404 } })
    }
    return user
}