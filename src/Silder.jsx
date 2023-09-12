import React from 'react'
import estilos from "./slider.module.css"


export const Slider = ({imagenes, respuestas}) => {

  const [imagenActual , setImagenActual] = React.useState(0);
  const cantidad = imagenes?.length;



  const[answer, setAnswer] = React.useState("")


  const moveRight = () =>{
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1)
  }
  const moveLeft = () =>{
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1)
  }

  const guardadoRespuestaUsuario = (ejemplo) =>{
    let saved = ejemplo.target.value
    answer(saved)
  };




  // Manejo de error si no es un array o una cantidad
  if (!Array.isArray(imagenes)|| cantidad === 0 ) {
    return
  }
  return (
    <>
    <div className={estilos.conteiner}>
      <div className= {estilos.text_conteiner}>
        <button onClick={moveLeft} className={estilos.arrows}>←</button>

        {imagenes.map((imagen, index) =>{

            return (
              <div> { imagenActual === index &&(    
                <p key={index}>{imagen}</p>
              )}

              </div>
            )
        })}
      <button onClick={moveRight} className={estilos.arrows}>→</button>  
      
      </div> 
    </div>
    </>
  )
}
