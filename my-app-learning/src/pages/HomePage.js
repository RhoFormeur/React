import MainLayout from "../layouts/MainLayouts";
import ListCard from "../components/home/ListCard";

function HomePage() {
  const listcard = [
    {
      id: 0,
      title: "Nissan Skyline",
      subtitle: "R34 GTR / RB26DETT",
      img: "https://live.staticflickr.com/65535/50045903352_db79635838_b.jpg",
    },
    {
      id: 1,
      title: "Mazda RX7",
      subtitle: "FD3S / 13B Bi-Turbo",
      img: "https://c4.wallpaperflare.com/wallpaper/760/302/555/mazda-rx-7-mazda-jdm-japanese-cars-mazda-rx-7-fd-hd-wallpaper-preview.jpg",
    },
    {
      id: 2,
      title: "Honda NSX",
      subtitle: "HP-X / C30A",
      img: "https://www.automotivpress.fr/wp-content/uploads/2016/02/Honda-NSX-1990-00.jpg",
    },
  ];
  return (
    <MainLayout>
      <ListCard list={listcard} />
    </MainLayout>
  );
}

export default HomePage;
