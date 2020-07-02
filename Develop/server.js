const   express = require("express");

// import our routes 
const apiRoutes = require("../Routes/apiRoutes");
const htmlRoutes = require("../Routes/htmlRoutes");

// inantiate our express app
const app = express ();

const Port = process.env.PORT || 3000;

// boiler plate code to make api calls work
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// allows us to serve our css/ html/ js
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Listener
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}.`));

