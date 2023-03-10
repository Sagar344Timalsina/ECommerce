const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const adminauthRoutes = require('./routes/adminAuthenRoute');
const clientauthRoutes = require("./routes/clientAuthenRoute");
const categoryRoute = require('./routes/categoryRoute');
const productRoute = require('./routes/productRoute');

dotenv.config(); // to call the .env file and access the value
mongoose.set("strictQuery", false);
//promise return garxa.. so then() use
mongoose.
    connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    //("mongodb+srv://ankitmaharjan10:dUcxvY2XdXwZVhxZ@cluster0.g7jmgbd.mongodb.net/Computer_Shop?retryWrites=true&w=majority")
    .then(() => {
        console.log("DB connection Succesfull")
    })
    .catch((error) => {
        console.log(error);
    });
app.use(cors());
app.use(express.json());

app.use("/api/admin", adminauthRoutes);
app.use("/api/client", clientauthRoutes);
app.use("/api/category", categoryRoute);
app.use("/api/product", productRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running")
});