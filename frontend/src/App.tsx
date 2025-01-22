import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import TabsContainer from './components/tabs/TabsContainer';

function App() {
  return (
    <ChakraProvider>
      <TabsContainer />
    </ChakraProvider>
  );
}

export default App;
