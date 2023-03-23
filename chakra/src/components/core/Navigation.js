import { NavLink } from 'react-router-dom';
import { Grid, GridItem, Flex, HStack } from '@chakra-ui/react';

const Navigation = props => {
  const { title, link } = props;

  return (
    <Grid templateAreas={`"title navlink"`} gridTempLateColumns={'1fr 3fr'}>
      <GridItem area={'title'}>
        <NavLink
          key={title.toLocaleLowerCase()}
          exact="true"
          to={'/'}
          activeclassname="active"
        >
          {title}
        </NavLink>
      </GridItem>

      <GridItem area={'navlink'}>
        <Flex>
          <HStack spacing={'24px'}>
            {link.map(link => {
              return (
                <NavLink
                  key={link.toLocaleLowerCase()}
                  exact="true"
                  to={'/' + link.toLocaleLowerCase()}
                  activeclassname="active"
                >
                  {link}
                </NavLink>
              );
            })}
          </HStack>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Navigation;
