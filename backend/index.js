const express = require ('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')
app.use( cors() )
app.use(bodyparser.json())
//port
app.listen(3000 , ()=>{
    console.log('servidor rodando')
})
//conexao
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api',
    port: 3306
})
//checa conexao
db.connect(err=>{
    if (err){
        console.log(err,'dberr (erro no banco)')
    }
    console.log('conexao funcionando')
})

/*
//pega todos os dados usuario
app.get('/user', (req,res)=>{
    let qr = 'select * from api'
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err, 'errs')
        }
        if(result.length > 0){
            res.send({
                message: 'todos os dados de cadastro',
                data:result
            })
        }
    })
})

//pega um dado usuario
app.get('/user/:id',(req,res)=>{
    let gID = req.params.id;
    let qr = `select * from api where id = ${gID}`
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result.length > 0 ){
            res.send({
                message: 'pegar um dado',
                data:result
            })
        }else{
            res.send({
                message: 'dados não encontrados'
            })
        }
    })
})

//atualizar dados usuario
app.put('/user/:id',(req,res)=>{
    console.log(req.body, 'updatedata')
    let gID = req.params.id;
    let nome = req.body.nome
    let login = req.body.login
    let cpf = req.body.cpf
    let email = req.body.email
    let senha = req.body.senha
    let bloqueado = req.body.bloqueado
    let perfis = req.body.perfis
    let qr = `update cadastro set nome = '${nome}', login = '${login}', cpf = '${cpf}', email = '${email}',
     senha = '${senha}', bloqueado = '${bloqueado}', perfis = '${perfis}' where id = ${gID}`

    db.query(qr,(err,result)=>{
        if(err){console.log(err)}
        res.send({
            message: 'dados atualizados'
        })
    })
})

//apagar dados usuario
app.delete('/user/:id',(req,res)=>{
    let gID = req.params.id;

    let qr = `delete from user where id = ${gId}`;
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err)
        }
        res.send({
            message: 'dados deletados'
        })
    })
})

*/

//criar dados novo_usuario
app.post('/user',(req,res)=>{
    console.log(req.body, 'createdata')
    let nome = req.body.nome
    let login = req.body.login
    let cpf = req.body.cpf
    let email = req.body.email
    let senha = req.body.senha
    let bloqueado = req.body.bloqueado
    let sistemas = req.body.perfis

    let qr =  `insert into novo_usuario(nome, login, cpf, email,senha, bloqueado, sistemas)
    values('${nome}','${login}','${cpf}','${email}','${senha}','${bloqueado}','${sistemas}')` ;

    db.query(qr,(err,result)=>{
        if(err){console.log(err)}
        console.log(result,'result')
        res.send({
            message: 'dados inseridos'
        })
    })
})

//criar dados novo_perfil_usuario
app.post('/novo_perfil_usuario',(req,res)=>{
    console.log(req.body, 'novo_perfil_usuario')
    let perfildeusuario = req.body.perfildeusuario
    let tipo_de_usuario = req.body.tipo_de_usuario
    let tipo_de_envio_faturamento = req.body. tipo_de_envio_faturamento
    let setor = req.body.setor
    let funcao = req.body.funcao
    let bloqueado = req.body.bloqueado
    let sistemas = req.body.perfis

    let qr =  `insert into novo_perfil_de_usuario(perfil_de_usuario, bloqueado, sistemas, tipo_de_usuario, tipo_de_envio_faturamento, setor, funcao)
    values('${perfildeusuario}','${bloqueado}','${sistemas}', '${tipo_de_usuario}', '${tipo_de_envio_faturamento}','${setor}','${funcao}' )` ;

    db.query(qr,(err,result)=>{
        if(err){console.log(err)}
        console.log(result,'result')
        res.send({
            message: 'dados inseridos'
        })
    })
})


//criar dados novo_tipo_de_usuario
app.post('/novo_tipo_de_usuario',(req,res)=>{
    console.log(req.body, 'createNovoTipoDeUsuario')
    let bloqueado = req.body.bloqueado
    let nome = req.body.nome

    let qr =  `insert into novo_tipo_de_usuario(bloqueado, nome)
    values('${bloqueado}','${nome}')` ;

    db.query(qr,(err,result)=>{
        if(err){console.log(err)}
        console.log(result,'result')
        res.send({
            message: 'dados inseridos'
        })
    })
})


//criar dados setor
app.post('/setor',(req,res)=>{
    console.log(req.body, 'createsetor')
    let bloqueado = req.body.bloqueado
    let nome = req.body.nome

    let qr =  `insert into setor(bloqueado, nome)
    values('${bloqueado}','${nome}')` ;

    db.query(qr,(err,result)=>{
        if(err){console.log(err)}
        console.log(result,'result')
        res.send({
            message: 'dados inseridos'
        })
    })
})


//criar dados sistemas
app.post('/novo-sistemas',(req,res)=>{
    console.log(req.body, 'create_novo_sistemas')
    let bloqueado = req.body.bloqueado
    let nome = req.body.nome

    let qr =  `insert into novo_sistemas(bloqueado, nome)
    values('${bloqueado}','${nome}')` ;

    db.query(qr,(err,result)=>{
        if(err){console.log(err)}
        console.log(result,'result')
        res.send({
            message: 'dados inseridos'
        })
    })
})

//criar dados pessoas
app.post('/pessoas',(req,res)=>{
    console.log(req.body, 'create_pessoas')
    let nome = req.body.nome
    let login = req.body.login
    let cpf = req.body.cpf
    let email = req.body.email
    let senha = req.body.senha
    let bloqueado = req.body.bloqueado

    let qr =  `insert into pessoas(nome, login, cpf, email,senha, bloqueado)
    values('${nome}','${login}','${cpf}','${email}','${senha}','${bloqueado}')` ;

    db.query(qr,(err,result)=>{
        if(err){console.log(err)}
        console.log(result,'result')
        res.send({
            message: 'dados inseridos'
        })
    })
})