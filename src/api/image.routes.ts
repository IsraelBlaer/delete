import express from 'express'
import { deleteImageHandler, getAllImageHandler, getImageHandler, imageUplaodHandler } from './image.controller'





const route =  express.Router()


route.post('/v1/img-upload',imageUplaodHandler)
route.get('/v1/get-image/:fileName',getImageHandler)
route.get('/v1/get-images/',getAllImageHandler)
route.delete('/v1/delete-image/:fileName',deleteImageHandler)

export default route