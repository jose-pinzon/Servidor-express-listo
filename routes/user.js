
const { Router } = require('express')
const { userGet, userPut, userPost, userDelete,userPatch } = require('../controllers/userController')

const router = Router()

router.get('/', userGet )

router.post('/', userPost)

router.put('/:id', userPut ) 

router.patch('/', userPatch)


router.delete('/', userDelete)



module.exports = router
