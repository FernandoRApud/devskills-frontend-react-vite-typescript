import {
  BrowserRouter,
} from 'react-router-dom';
import Routing from './components/Routing/index';

const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export default App;
