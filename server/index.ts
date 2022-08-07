
import app from './app';
import {startConnection} from './database';


startConnection();

app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
});