import express from "express"
import { comRouter } from "./modules/comments/com.index.js"
import { postRouter } from "./modules/posts/post.index.js"
import { userRouter } from "./modules/users/user.index.js"
import { userModel } from "../DB/models/user.model.js"
import { postModel } from "../DB/models/post.model.js"
import { comModel } from "../DB/models/com.model.js"
import { sequelizeDB } from "../DB/connectDB.js"


const bootstrap = async () => {
    // Express runnining
    const app = express()
    const port = 9000


    // DB
    await sequelizeDB.sync()

    // Router
    app.use(express.json())

    app.use("/comments", comRouter);
    app.use("/posts", postRouter);
    app.use("/users", userRouter);

    app.use((error, req, res, next) => {
        const status = error?.cause?.status || 500;
        return res.status(status).json({ Massage: error.message || "Somthing went Error", stack: error.stack })
    })

    app.listen(port, () => { console.log(`the Server running at port number ${port}`) })
}

export default bootstrap