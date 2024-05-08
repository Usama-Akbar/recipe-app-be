
// import { connectToMongo } from './db.js'
import express from 'express'
import { connectToMongo } from './db.js'
import cors from 'cors'
const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//database connections
connectToMongo();
// HTTP Methods Routes
import { userRouter } from './src/routes/user.route.js'
import { recipeRouter } from './src/routes/recipe.route.js'
app.use('/api/users', userRouter)
app.use('/api/recipe', recipeRouter)

const port = 3000;

app.get("/", (req, res) => {
    res.send("Test task of Recipies App");
});

app.listen(port, () => {
    console.log(`Server is Running at port : http://localhost:${port}`);
});
