import { useEffect } from 'react';
import Layout from './Components/Layout';

function App() {
  useEffect(() => {
    console.log('Inside App.js!');
  }, []);
  return <Layout />;
}

export default App;
