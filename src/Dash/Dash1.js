import React, { useState, useEffect } from 'react';
import BarChart from '../components/Charts/BarChart';
import LineChart from '../components/Charts/LineChart';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../data/env';

//import { UserData } from '../data/Data';
import './Dash.css';
//import { FirebaseError } from 'firebase/app';

function Dash() {
  const [dadosGraficoBarra, setDadosGraficoBarra] = useState();
  const [dadosGraficoLinha, setDadosGraficoLinha] = useState();
  let graphData = [];

  useEffect(() => {
    async function fetchData() {
      try {
        const query = await getDocs(collection(db, 'graphinfo'));
        query.forEach((doc) => {
          const aux = doc.data();
          graphData.push(aux);
        });
        const aux2 = {
          labels: graphData.map((data) => data.month),
          datasets: [
            {
              label: 'Faturamento',
              data: graphData.map((data) => data.comRev),
              backgroundColor: ['green'],
              borderColor: 'black',
              borderWidth: 1,
            },
          ],
        };
        const aux3 = {
          labels: graphData.map((data) => data.month),
          datasets: [
            {
              label: 'Vendas',
              data: graphData.map((data) => data.comSell),
              backgroundColor: ['green'],
              borderColor: 'black',
              borderWidth: 1,
            },
          ],
        };
        setDadosGraficoBarra(aux2);
        setDadosGraficoLinha(aux3);
        //setDadosTabela(graphData);
      } catch (err) {
        console.log('ERRO do try/catch', err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='dashboard'>
      <h2>Faturamento (Milhões de Reais)</h2>
      <div style={{ width: 600 }}>
        {dadosGraficoBarra && <BarChart chartData={dadosGraficoBarra} />}
      </div>
      <h2>Vendas por mês</h2>
      <div style={{ width: 550 }}>
        {dadosGraficoLinha && <LineChart chartData={dadosGraficoLinha} />}
      </div>
      {/* <table>
        <thead>
          <tr>
            <th>Titulo Tabela</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mes</td>
            <td>Vendas</td>
          </tr>
          {dadosTabela &&
            dadosTabela.map((dado, index) => (
              <tr key={index}>
                <td>{dado.mes}</td>
                <td>{dado.vendas}</td>
              </tr>
            ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default Dash;