import Navigation from '../components/core/Navigation';
import Footer from '../components/core/Footer';
import { Outlet } from 'react-router-dom';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import {theme} from '../Theme'

export const MainLayout = () => {
  const title = 'Learning React/Chakra';
  const navlink = ['API F1', 'TerraBio', 'Admin'];

  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateAreas={`"header"
                        "body"
                        "footer"`}
        gridTempLateRows={'50px 1fr 50px'}
        gridTempLateColumns={'100vw'}
        gap="1"
      >
        <GridItem area={'header'}>
          <Navigation title={title} link={navlink} />
        </GridItem>

        <GridItem area={'body'} minH="calc(100vh - 100px)">
          <Outlet />
        </GridItem>

        <GridItem area={'footer'}>
          <Footer title={title} />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};
