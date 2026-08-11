const express = require('express')
const multer = require('multer')
const uploadFile = require("./service/storage.service")
const postModel = require("./models/post.models")
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })

// ===== CREATE POST =====
app.post('/create-post', upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Image is required" })
        }

        if (!req.body.caption || req.body.caption.trim() === "") {
            return res.status(400).json({ message: "Caption is required" })
        }

        const result = await uploadFile(req.file.buffer)

        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })

        return res.status(201).json({
            message: "Post created",
            post
        })

    } catch (err) {
        console.error("Create post error:", err)
        return res.status(500).json({ message: "Something went wrong while creating the post" })
    }
})

// ===== GET ALL POSTS =====
app.get("/posts", async (req, res) => {
    try {
        const posts = await postModel.find().sort({ createdAt: -1 })

        return res.status(200).json({
            message: "Posts fetched",
            posts
        })

    } catch (err) {
        console.error("Fetch posts error:", err)
        return res.status(500).json({ message: "Something went wrong while fetching posts" })
    }
})

// ===== DELETE POST =====
app.delete('/posts/:id', async (req, res) => {
    try {
        const post = await postModel.findByIdAndDelete(req.params.id)

        if (!post) {
            return res.status(404).json({ message: "Post not found" })
        }

        return res.status(200).json({
            message: "Post deleted",
            post
        })

    } catch (err) {
        console.error("Delete post error:", err)
        return res.status(500).json({ message: "Something went wrong while deleting the post" })
    }
})

module.exports = app