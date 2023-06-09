import Navigation from '../components/core/Navigation';
import Footer from '../components/core/Footer';
import { Outlet } from 'react-router-dom';
import { ChakraProvider,Grid, GridItem } from '@chakra-ui/react';
import {theme} from '../Theme'

export const AdminLayout = () => {
  const title = 'Admin Page';
  const navlink = ['Admin'];

  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateAreas={`"nav"
                        "main"
                        "footer"`}
        gridTempLateRows={'50px 1fr 50px'}
        gridTempLateColumns={'1fr'}
        gap="1"
      >
        <GridItem area={'nav'}>
          <Navigation title={title} link={navlink} />
        </GridItem>

        <GridItem area={'main'} minH="calc(100vh - 100px)">
          <Outlet />
        </GridItem>

        <GridItem area={'footer'}>
          <Footer title={title} />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};
