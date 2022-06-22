import React,{useState,useEffect} from 'react';
import BarChart from '../components/Charts/BarChart';
import LineChart from '../components/Charts/LineChart';
import PieChart from '../components/Charts/PieChart';

import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from '../data/env';

import './Dash.css';
import { UserData } from '../data/Data';
import { FirebaseError } from 'firebase/app';



function Dash() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Faturamento",
        data: UserData.map((data) => data.comRev),
        backgroundColor: ['green'],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
});
  

/*

   <div style={{ width: 600 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 600 }}>
        <PieChart chartData={userData} />
      </div>

*/

return (
  <div className="dashboard">
    <h2>Faturamento (Milhões de Reais)</h2>
    <div style={{ width: 600 }}>
        <BarChart chartData={userData} />
      </div>
    <h2>Vendas por mês</h2>
    <div style={{ width: 600 }}>
        <LineChart chartData={userData} />
    </div>
      
  </div>
);

};

export default Dash;


/*
function Dash() {

  const [dadosGrafico, setDadosGrafico] = useState([]);
  const [userData, setUserData] = useState([]);


  useEffect(() => {
    if(dadosGrafico === []){
      async function fetchData() {
        let graficos = [];
        const querySnapshot = await getDocs(collection(db, "graphinfo"));
        querySnapshot.forEach((doc) => {
          graficos.push(doc.data());
    
        });
    
        setDadosGrafico(graficos);
      }
      fetchData();
    }
    /*else{
      setUserData(
        {
          labels: dadosGrafico.map((data) => data.month),
          datasets: [{
            label: "Faturamento",
            data: dadosGrafico.map((data) => data.comRev),
            backgroundColor: ['green'],
            borderColor: 'black',
            borderWidth: 1
          }]
        }
      );
    }*/
    
  //}, []);
  //console.log('re',dadosGrafico);