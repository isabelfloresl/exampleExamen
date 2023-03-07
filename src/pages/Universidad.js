import { useNavigate } from "react-router-dom";

const Universidad = () => {

  const navigate = useNavigate();
  const handlerClick=() => {
    navigate ('/')
  }
    return (
     
      <div>
        Estoy en unviersidad, bienvenido
        <div>
        <button className="btn btn-danger" onClick={handlerClick}>Volver a inicio</button>
        </div>
      </div>
    );
  }
  
  export default Universidad;
  