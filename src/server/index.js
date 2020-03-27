import app from "./config/config";
import index from './router/route';


//configuração da pasta de views        
app.set('views', path.join(__dirname.length, 'views'));

function start(client,port){
        app.use('/',index)
        app.listen('3000',()=> {
                console.log("Server started on port 3000");    
        })
}


export default  start;
