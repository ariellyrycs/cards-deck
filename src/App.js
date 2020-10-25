import CardContainer from './components/CardContainer.js';
import {ContextProvider} from './context/store';
import './App.css';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <CardContainer />
      </ContextProvider>
    </div>
  );
}

export default App;
