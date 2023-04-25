import multer from 'multer'
import fs from 'fs'
import path from 'path'
import { NextFunction } from 'express'


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/my-uploads')
    },
      
    filename: function (req, file, cb) {
        cb(null, file.originalname); 
    },


})

const MAX_SIZE = 1024*1024

const upload = multer({
    storage: storage,

    limits : {fileSize:MAX_SIZE},

    fileFilter: (req, file, callback) => {
        console.log(file)
        const ext = path.extname(file.originalname)
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.gif') {

            callback(new Error('Invalid file type'));
        } else {

            callback(null, true);
        }
    }

}).single('file')

export default upload

