import Navigation from "../components/core/Navigation";

const MainLayout = ({ children }) => {
  const title = "Ma super app";
  const navlink = ["Article", "Contact","Admin","TerraBio"];

  return (
    <div className="App">
      <Navigation title={title} link={navlink} />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
