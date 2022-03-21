import { StyleSheetManager } from "styled-components";
import StyleCom from "../style/StyleCom";
import Componente1 from "../componentes/Componente1";
import Componente2 from "../componentes/Componente2";
import Componente3 from "../componentes/Componente3";
import Componente4 from "../componentes/Componente4";
import Componente5 from "../componentes/Componente5";
import Componente6 from "../componentes/Componente6";
import Componente7 from "../componentes/Componente7";
import Componente8 from "../componentes/Componente8";
import Componente9 from "../componentes/Componente9";
import Componente10 from "../componentes/Componente10";

function App() {
  return (
    <div>
      <StyleCom>
      <img className="header" src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1647807563/images/bg-header-desktop_mgtbga.svg" alt="header" />
      <Componente1/>
      <Componente2/>
      <Componente3/>
      <Componente4/>
      <Componente5/>
      <Componente6/>
      <Componente7/>
      <Componente8/>
      <Componente9/>
      <Componente10/>
      </StyleCom>
    </div>
);
}

export default App;
