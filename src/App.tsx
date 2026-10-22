import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

function App() {
  return (
 <Grid templateAreas={{
  base : `"nav" "main"`,
  lg : `"nav nav" "aside main"`//>>1024px
 }}>
  <GridItem area='nav'>
    <NavBar width="60px" height="60px"></NavBar>
  </GridItem>
  <GridItem area='aside' bg='gold' display={{ base: "none", lg: "block" }}>Aside</GridItem>
  <GridItem area='main' bg='dodgerblue'>Main</GridItem>
 </Grid>
  );
}

export default App;