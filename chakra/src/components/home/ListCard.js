import {Box, Wrap, WrapItem, Card, CardBody,Image,Stack,Heading,Text,Divider,CardFooter,ButtonGroup,Button } from "@chakra-ui/react";

const ListCard = props => {
  const { list } = props;
  return (
    <Box>
      <Text>Liste de Voiture</Text>
      <Wrap spacing={'30px'} justify={'center'}>
        {list.map(item => {
          return (
            <WrapItem>
              <Card maxW="sm" h={'500px'} key={item.id}>
                <CardBody>
                  <Image src={item.img} alt={item.title} borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{item.title}</Heading>
                    <Text>{item.subtitle}</Text>
                    <Text color="blue.600" fontSize="2xl">{item.price}</Text>
                 </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">Buy now</Button>
                    <Button variant="ghost" colorScheme="blue">Add to cart</Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};

export default ListCard;
