const server = require('./config');

module.exports = 
{
        server,
        start(client,port){
            server.listen('3000',()=> {
                console.log("Server started on port 3000");    
        })
        }
    
}