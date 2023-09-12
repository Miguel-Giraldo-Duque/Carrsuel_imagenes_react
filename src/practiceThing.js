const fs = require("fs")

const newImage  = {
    text: "Imagen de lobo",
    url: "",
    date:""
}

const newImageJson = JSON.stringify(newImage)

fs.writeFile("images.json", newImageJson , (error) =>{
    if(error) console.error( error);
    console.log("La informacion fue recibida")
})