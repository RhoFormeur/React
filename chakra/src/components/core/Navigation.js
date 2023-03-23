import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navigation = props => {
  const { title, link } = props;

  return (
    <Box as="nav">
      {/* Title */}
      <a href={'/'}>{title}</a>
      {/* Item-list */}
      <ul className="row">
        {link.map(link => {
          return (
            <NavLink
              key={link}
              exact="true"
              to={'/' + link}
              activeclassname="active"
            >
              {link}
            </NavLink>
          );
        })}
      </ul>
      <ColorModeSwitcher />
    </Box>
  );
};

export default Navigation;
