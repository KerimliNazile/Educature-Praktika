import express from 'express'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose, { Schema } from 'mongoose'

dotenv.config()
app.use(cors())
app.use(express.json())

const tagSchema = new Schema({
    image: { type: String, required: true },
    text: { type: String, required: true },
    title: { type: String, required: true }
}, { timestamps: true })

const Tags = mongoose.model("Tags", tagSchema)


app.get('/tags', async (req, res) => {

    try {
        const tags = await Tags.find({})
        res.send(tags)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})
app.get('/tags/:id', async (req, res) => {
    try {
        const tags = await Tags.findById(req.params.id)
        res.send(tags)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


app.post('/tags', async (req, res) => {
    try {
        const tag = new Tags({
            image: req.body.image,
            text: req.body.text,
            title: req.body.title
        })
        await tag.save()
        res.send({ message: "Created" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})




app.delete('/tags/:id', async (req, res) => {
    try {
        const tags = await Tags.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)
mongoose.connect(url)
    .then(() => console.log("DB connect"))
    .catch(err => console.log("DB not connect" +err))
app.listen(port, () => {

    console.log(`Example app listening on port `)
})