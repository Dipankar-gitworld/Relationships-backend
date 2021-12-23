const app = require ("./index");

const connect = require ("./configs/db");

app.listen("5555", async ()=>{
    await connect();
    console.log("listning to port 5555");
})