/*Root App container where the app lives. Header and Images components are called here. */

import './App.css';
import Images from './containers/Images';
import Header from './components/UI/Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <Images/>
    </div>
  );
}

export default App;
