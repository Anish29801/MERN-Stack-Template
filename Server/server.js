
const app = require('./app');
const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Servr running on port ${port}`);
})