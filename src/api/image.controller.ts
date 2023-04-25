import { Request, Response } from 'express'
import multer from 'multer';
import upload from '../utils/multersetup';
import path from 'path'
import fs from 'fs'


export async function imageUplaodHandler(req: Request, res: Response) {

  upload(req, res, (error) => {

    if (error instanceof multer.MulterError) {

       return res.status(400).json({message: error.message })

    } else if (error) {

      // Other error occurred

      if (error.message === "Invalid file type") {

        return res.status(400).json({ message: "Invalid file, images only" })

      }

      return res.status(500).json({ message: "an unlnown error occured while uploading" });

    }

    return res.status(200).send('file uploaded sucessfully');
  })

}

export async function getImageHandler(req: Request, res: Response) {

  const { fileName } = req.params

  const filePath = path.join(__dirname, '../public/my-uploads/', fileName)

  if (!fs.existsSync(filePath)) return res.status(404).json({ error: "file not found" })

  return res.sendFile(filePath)
}

export async function deleteImageHandler(req: Request, res: Response) {

  const { fileName } = req.params

  const filePath = path.join(__dirname, '../public/my-uploads/', fileName)

  //if (!fs.existsSync(filePath)) return res.status(404).json({ error: "file not found" })
   
  fs.unlink(filePath,(err)=>{

    if(err) return res.send(err.message)

    res.send("file deleted successfuly")
  })
  
}


export async function getAllImageHandler(req: Request, res: Response) {


  const filePath = path.join(__dirname, '../public/my-uploads/')
 
   
  fs.readdir(filePath,(err,files)=>{
    
    if(err) return res.send(err.message)
     
      res.send(files)
    
  })
  
  
}

