import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db,app } from '../data/env';

export const CadContext = React.createContext();

const CadProvider = (props) => {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "contacts"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        const novoContato = {
          id: doc.id,
          nome: doc.data().nome,
          email: doc.data().email,
          coment: doc.data().coment,
        };
        
        const contAux = [...contatos];
        contAux.push(novoContato);
        setContatos(contAux);
      });

    }
    fetchData();
  }, []);


  /*useEffect(() => {
    setLivros(
      [
        {
          id: 0,
          nome: "A descoberta do mundo",
          autor: "Clarice Lispector",
          paginas: "480",
          imagem: "https://m.media-amazon.com/images/I/61iz3UgVyJL.jpg"
        },
        {
          id: 1,
          nome: "Gênero e desigualdades",
          autor: "Flávia Biroli",
          paginas: "210",
          imagem: "https://boitempo-img.f1cdn.com.br/resizer/view/900/900/false/true/542.jpg"
        }
      ]
    );
  }, []);
*/
  
  const navigate = useNavigate();

  const incluirContato = async (event) => {
    event.preventDefault();
    console.log('Inclue contato');
    const id = contatos.length;
    const novoContato = {
      id: id,
      nome: event.target.nome.value,
      email: event.target.email.value,
      coment: event.target.coment.value,
    };
    const contAux = [...contatos];
    contAux.push(novoContato);
    setContatos(contAux);

    //gravar no banco
    console.log(db);
    await setDoc(doc(db, "contacts", id.toString()), {
      id: id,
      nome: event.target.nome.value,
      email: event.target.email.value,
      coment: event.target.coment.value,
    });


    navigate('/');
  }

  return (
    <CadContext.Provider value={{
      contatos: contatos,
      incluirContato: incluirContato
    }}>
      {props.children}
    </CadContext.Provider>
  );
};

export default CadProvider;

/*

const CadProvider = (props) => {
  const [contatos, setContatos] = useState([]);
  const [dadosGrafico, setDadosGrafico] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let graficos = [];
      const querySnapshot = await getDocs(collection(db, "graphinfo"));
      querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        //console.log('doc1',doc.data());
        graficos.push(doc.data());
        
        /*const novoContato = {
          id: doc.id,
          nome: doc.data().nome,
          email: doc.data().email,
          coment: doc.data().coment,
          
        };*/
        
        //const contAux = [...contatos];
        //contAux.push(novoContato);
        //setContatos(contAux);
      //});
      //console.log('teste',graficos);
      //setDadosGrafico(graficos);
    //}
    //fetchData(); 
  //}, []); 
  

  