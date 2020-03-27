import  express from 'express';
const Router = express.Router();

Router.get('/dashboard' ,(req,res)=>{
    res.render('index' , { title: 'teste12345' } );
})

Router.get('/teste', (req,res)=>{
    res.send('Teste2');
})


export default Router;