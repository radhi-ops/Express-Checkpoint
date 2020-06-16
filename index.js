const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static(path.join(__dirname, "public")));

/**
 * Middleware
 */
const workTime = function (req, res, next) {
    const date = new Date();
    const day = date.getDay();
    const hour =date.getHours();
    if(hour > 8 && hour <18 && day > 0 && day < 6)
      console.log("The web application is available");
    else
      res.send("The web application is only available in working time (Monday to Friday,  from 9 to 17")
    
    next()
  }
  
//   app.use(workTime)


app.get("/", (req, res) => {
    res.render("home", { title: "Home"});
  });

app.get("/service", (req, res) => {
    res.render("service", { title: "Our services"});
  }); 

app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact us"});
  }); 



app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });