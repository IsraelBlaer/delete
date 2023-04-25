# img_uploader_api

Image Uploader API
This is a simple API for uploading images to a server. It allows users to upload images in PNG or JPEG format, and provides a unique URL for each uploaded image.

Installation
To use this API, you will need to have Node.js installed on your machine. You can then download the code from this GitHub repository and install the required dependencies by running the following command in your terminal:

npm install
Usage
To start the server, run the following command in your terminal:
npm start

This will start the server on port 3000. You can then make HTTP requests to the following endpoints:

POST /upload: Uploads an image file to the server. Expects a multipart/form-data request body with a file field called image. Returns a JSON object with the URL of the uploaded image.
GET /images/:id: Retrieves an image file from the server. Expects a URL parameter id which corresponds to the unique ID of the uploaded image.
Configuration
You can configure the API by modifying the following environment variables:

PORT: The port on which the server will listen. Default is 3000.
UPLOADS_DIRECTORY: The directory in which uploaded files will be stored. Default is ./uploads.
Contributing
If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request!

License
This project is licensed under the MIT License. See the LICENSE file for details
