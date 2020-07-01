const   express = require("express")

// import our routes 
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// inantiate our express app
const app = express ();

const Port = process.env.PORT || 3000;

// boiler plate code to make api calls work
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// allows us to serve our css/ html/ js
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () =>{
    console.log('Listening on PORT ${PORT}');
})

