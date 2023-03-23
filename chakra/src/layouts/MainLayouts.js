import Navigation from '../components/core/Navigation';
import Footer from '../components/core/Footer';
import { Container } from '@chakra-ui/react';

const MainLayout = ({ children }) => {
  const title = 'Learning React/Chakra';
  const navlink = ['API F1', 'TerraBio', 'Admin'];

  return (
    <div className="App">
      <Navigation title={title} link={navlink} />
      <Container as={'main'}>{children}</Container>
      <Footer title={title} />
    </div>
  );
};

export default MainLayout;
