import Header from './components/header';
import Form from './components/form';
import logo from './images/logo.png';
import data from './data';


function App() {


  return (
    <div className="App">
      <Header logo={ logo }/>
      <Form data={ data }/>
    </div>
  );
}

export default App;
