import { NavLink } from "react-router-dom";
import{Box,useColorModeValue} from "@chakra-ui/react";

const Navigation = (props) => {
  const { title, link } = props;

  return (
    <Box as="nav" bg={useColorModeValue('gray.50', 'gray.900')}>
      {/* Title */}
      <a href={"/"}>{title}</a>
      {/* Item-list */}
      <ul className="row">
        {link.map((link) => {
          return (
            <NavLink key={link} exact="true" to={ "/" + link } activeclassname="active">
              { link }
            </NavLink>
          );
        })}
      </ul>
    </Box>
  );
};

export default Navigation;
