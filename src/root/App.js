import React from 'react';
import Dashboard from './Dashbord';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
   <ChakraProvider>
     <Dashboard />
   </ChakraProvider>
  );
}

export default App;
