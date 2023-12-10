// Load express
const express = require('express');

// Create our express app
const app = express();

// const jsxViewEngine = require('jsx-view-engine');

// app.set('view engine', 'jsx');
// app.set('views', './views');
// app.engine('jsx', jsxViewEngine());

// // ===================   Middleware  ================
// //
// app.use((req, res, next) => {
//     console.log('Middleware: I run for all routes');
//     next();
//  });

//  //near the top, around other app.use() calls
// app.use(express.urlencoded({extended:false}));


// Global variable to track actual number of bottles
let bottleCount = 99;


app.get('/', (req, res) => {
    console.log("bottleCount in Parent", bottleCount);
    res.send(`${bottleCount} bottles on the wall <br></br>
    <a href="/${bottleCount-1}"> Take one down, pass it around </a>`);
});


app.get('/:number_of_bottles', (req, res) => {

    // this is what we received from hyperlink. do not know how to use dynamically so capturing that into a local variable
    let localbtlCnt = req.params.number_of_bottles;
    

    // This is to track the actual bottle count on wall
    //bottleCount = bottleCount-1; 

    // Incase if you want to take down starting from the parameter value
    bottleCount = localbtlCnt; 
    
    if (req.params.number_of_bottles === "0") {
        bottleCount = 99;
        res.send(`${localbtlCnt} bottles on the wall <br></br>
        <a href="/${bottleCount}"> Start Over </a>`);
    } else {
        res.send(`${localbtlCnt} bottles on the wall <br></br>
        <a href="/${bottleCount-1}"> Take one down, pass it around </a>`);
    }
})



app.listen(3003, () => {
    console.log('Listening on port 3003')
})