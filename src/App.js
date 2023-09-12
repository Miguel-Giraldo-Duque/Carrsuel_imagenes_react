import { giroCard } from './giroCard';
import { Slider } from './Silder';
function App() {

  const contenedorImagenes = [ 
    "What is HTML "  ,
    "What is a API",
    "What is css ", 
  ];

  const contenedorRespuestas = [ 
    "Html Is tata "  ,
    "Api is a place to take data from the websites o other tools",
    "The code to put styles in your html from colors, bragraunds, etc", 
  ];




  return (
    <div className="App"> 
      <giroCard/>
      <Slider imagenes={contenedorImagenes} repuestas={contenedorRespuestas}></Slider>
    </div>
  );
}

export default App;
