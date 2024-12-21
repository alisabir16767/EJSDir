const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));


// Set the views directory
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Sample data
const instaData = require("./data.json");

// Route to render Instagram page
app.get("/ig/:username", (req, res) => {
   const { username } = req.params;
   const data = instaData[username];
   console.log(instaData[username]);
   if(data){
      res.render("instagram", { data });
   } else {
      res.render("error.ejs");
   }
});

// Start server
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
