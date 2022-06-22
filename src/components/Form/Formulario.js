import React, { useContext } from "react";
import { CadContext } from '../../context/CadProvider';
import './Formulario.css';

const Formulario = (props) => {

  const { incluirContato } = useContext(CadContext);

  return (
    <div className="formulario" >
      <h2>Preencha seus dados</h2>
      <form onSubmit={incluirContato}>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite o nome"
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Digite o e-mail"
        />
        <input className="comentario"
          type="text"
          id="coment"
          name="coment"
          placeholder="Comentários"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
