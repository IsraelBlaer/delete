import express from 'express'
import { uploadImage } from './image.service'
import { deleteImageHandler, getAllImageHandler, getImageHandler, imageUplaodHandler } from './image.controller'
import upload from '../utils/multersetup'
import { Request,Response } from 'express'



const route =  express.Router()


route.post('/v1/img-upload',imageUplaodHandler)
route.get('/v1/get-image/:fileName',getImageHandler)
route.get('/v1/get-images/',getAllImageHandler)
route.delete('/v1/delete-iamge/:fileName',deleteImageHandler)

export default route