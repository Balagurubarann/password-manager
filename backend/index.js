const express = require("express");
# WRITE DOWN YOUR APP
 
const app = express();
const { PORT } = process.env
app.listen(PORT => console.log("App running at port: " + PORT));
