import express from 'express';
import {resolve} from 'path';

const app = express();
try {
    app.get('/ping', (req,res) => {
        res.send(req.headers);
    })


    app.get('*', (req,res) =>{
        res.send('404');
    })
}

catch{

    app.get('*',(req,res)=>{
        res.send('500')
    })
}

app.listen(process.env.PING_LISTEN_PORT, () => {
    console.log('The application is listening on port'+process.env.PING_LISTEN_PORT+'!');
})

