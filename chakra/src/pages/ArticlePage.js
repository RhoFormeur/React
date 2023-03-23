import axios from 'axios';
import { useState, useRef } from 'react';

export const ArticlePage = () => {
  const [data, setData] = useState(null);
  const yearInput = useRef(null);

  function getData(year, setData) {
    axios
      .get(`http://ergast.com/api/f1/${year}/driverStandings.json`)
      .then(response => {
        setData(response.data);
        console.log('response', response.data);
      })
      .catch(error => {
        console.log(error);
        setData(null);
      });
  }

  return (
    <div>
      <h2>Classement du championnat de F1 par année</h2>
      <label>
        Année :
        <input ref={yearInput} type="number" />
        <button
          type="button"
          onClick={() => getData(yearInput.current.value, setData)}
        >
          Envoyer
        </button>
      </label>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Nom</th>
            <th>Constructeur</th>
            <th>Points</th>
            <th>Victoires</th>
          </tr>
        </thead>
        {data &&
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings.length >
          0 ? (
          <tbody>
            {data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
              (item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.position}</td>
                    <td>
                      {item.Driver.givenName} {item.Driver.familyName}
                    </td>
                    <td>{item.Constructors[0].name}</td>
                    <td>{item.points}</td>
                    <td>{item.wins}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="5">Aucune donnée disponible</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};
