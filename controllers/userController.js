const { response, request  } = require('express')//esto es para que nossalgan las ayudas, ya que no se cuenta con typescript

const userGet = (req, res = response) => {

    const params = req.query;

    res.json({
        msg:'get API - controller', 
        params
    })
}

const userPost =  (req, res = response ) => {
    const body = req.body;

    res.status(201).json({
        msg:'Post API - Controller ',
        body
    })
}

const userPut = (req, res = response ) => {

    const id = req.params.id;

    res.json({
        msg:'put API - Controller' ,
        id
    })
}

const userDelete =  (req, res = response ) => {
    res.json({
        msg:'Delete API - Controller'
    })
}


module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}