import { render } from "react-dom";
//Importando el componente principal
import App from "js/App";
// Importando estilos globales
import "styles/global";

// Renderizado de la aplicacion en el div principal con id root
render(<App />, document.getElementById("root"));
