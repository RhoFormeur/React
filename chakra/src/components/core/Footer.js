import {Box,Text,useColorModeValue} from '@chakra-ui/react';

const Footer = (props) => {
    return (
      <Box as='footer' maxW={'100vw'} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Text>Footer of {props.title}</Text>
      </Box>
    );
  };
  
  export default Footer;
  