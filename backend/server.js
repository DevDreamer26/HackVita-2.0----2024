require("dotenv").config();
const express = require('express');
const cors = require("cors");
const router = require("./routes/save-router")
const authRouter = require("./routes/auth-router")
const connectDb = require("./database/database");
const app = express()
const port = 3000

const corsOptions = {
  origin: ["https://expn-tracker.netlify.app","http://localhost:5173"],            
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());


app.use("/api",router)
app.use("/api",authRouter)





connectDb().then(()=>{
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
})

