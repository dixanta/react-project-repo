const express=require('express');
const fs=require('fs');
const path=require('path');
const app=express();
app.get('/',(req,res)=>{
    res.send('<h1>Home PAge</h1>');
});

//app.use('/countries',require('./routes/countryRoutes'));
//app.use('/currencies',require('./routes/currencyRoutes'));

fs.readdir(path.join(__dirname,'routes'),(err,files)=>{
    files.forEach((f,i)=>{
        if(f.includes('Routes.js')){
            let name=f.replace('Routes.js','');
            let url='/'+name;
            console.log(url);
            app.use(url,require('./routes/'+f));
        }
       
    });
});

app.listen(3000,()=>{
    console.log('server is running');
});