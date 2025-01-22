import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import PreviewInterface from './components/client/PreviewInterface';

function App() {
  return (
    <ChakraProvider>
      <PreviewInterface />
    </ChakraProvider>
  );
}

export default App;
