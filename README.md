# img_uploader_api

Image Uploader API
This is a simple API for uploading images to a server. It allows users to upload images in PNG, Jpg, gif or JPEG format.

Installation
To use this API, you will need to have Node.js installed on your machine. You can then download the code from this GitHub repository and install the required dependencies by running the following command in your terminal:

npm install
Usage
To start the server, run the following command in your terminal:
yarn dev

This will start the server on port 5000. You can then make HTTP requests to the following endpoints:
POST http://localhost:5000/api/v1/img-upload
GET  http://localhost:5000/api/v1/get-image/:fileName
GET  http://localhost:5000/api/v1/get-images/
DELETE (single image) http://localhost:5000/v1/delete-iamge/:fileName

If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request!

License
This project is licensed under the MIT License. See the LICENSE file for details
