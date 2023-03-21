import MainLayout from "../layouts/MainLayouts";
import CardProposal from "../components/TerraBio/CardProposal";

function TerraBioPage(){
  const listproposal = [
    {
      id:0,
      avatar:"https://cdn.iconscout.com/icon/free/png-512/avatar-375-456327.png",
      date:"22 Février 2023, 12.21PM",
    },
    {
      id:1,
      avatar:"https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-366-456318-512.png",
      date:"24 Décembre 2022, 23.59PM",
    },
    {
      id:2,
      avatar:"https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-373-456325-512.png",
      date:"21 Mars 2023, 06.48AM",
    }
  ]
  return (
    <MainLayout>
      <CardProposal proposal={listproposal} />
    </MainLayout>
  );
}

export default TerraBioPage;