import * as React from 'react';
import { TokenProvider} from './src/context/TokenContext';
import Routes from './src/routes/Routes';

function App() {
  return (
    <TokenProvider>
      <Routes/>
    </TokenProvider>
  );
}

export default App;

