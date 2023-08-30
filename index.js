import express from "express";
import bodyParser from "body-parser";
import {dirname} from 'path';
import { fileURLToPath } from "url";
import qr from "qr-image";
import fs from "fs";


const port = process.env.PORT || 5000;
var __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));


app.get('/',(req, res)=>{
  res.render('index.ejs');
});



  app.post('/submit',(req, res)=>{      
      var hony = `${req.body['name']} \n ${req.body['phone']} \n ${req.body['email']}`;
      var picName =   req.body['name']+".png";
      var qr_svg  = qr.image(hony);
      const imagePath = `${__dirname}/public/img/${picName}`;
         qr_svg.pipe(fs.createWriteStream(imagePath));
        res.render('index.ejs',{image:`img/${picName}`});
    
  });

app.listen(port , ()=>{
console.log(`your project run on ${port}`)
});