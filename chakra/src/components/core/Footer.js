import { Box, Text } from '@chakra-ui/react';

const Footer = props => {
  return (
    <Box as="footer" maxW={'100vw'}>
      <Text>Footer of {props.title}</Text>
    </Box>
  );
};

export default Footer;
