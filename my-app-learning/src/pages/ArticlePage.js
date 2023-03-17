import MainLayout from "../layouts/MainLayouts";
import axios from "axios";
import { useState } from "react";

const ArticlePage = () => {
  const [data, setData] = useState(null);

  function getData(year) {
    // Ici nous utilisons axios afin de call l'API
    axios
      .get("http://ergast.com/api/f1/" + year + "/driverStandings")
      .then((res) => {
        // Ici nous sommes dans le callback de résultat
        setData(res.data)
        // Ensuite nous integrons nos data dans le state listCountries
      })
      .catch((err) => console.log(err));
  }

  return (
    <MainLayout>
      <h2>Classement du championnat de F1 par année</h2>
      <label>
        Année :
        <input id="year" type="number" />
        <button
          type="button"
          onClick={() => getData(document.getElementById('year').value)}
        >
          Envoyer
        </button>
      </label>
      <table>
        <tr>
            <th>Position</th>
            <th>Nom</th>
            <th>Constructeur</th>
            <th>Points</th>
            <th>Win</th>
        </tr>
      </table>
      <div>
      {data && (
        <div>
          <h3>Résultats :</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div> 
      )}
      </div>
    </MainLayout>
  );
};

export default ArticlePage;
