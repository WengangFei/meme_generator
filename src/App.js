import Header from './components/header';
import Form from './components/form';
import Image from './components/displayImage';
import logo from './images/logo.png';
import xin from './images/xin.jpeg';
import data from './data';


function App() {


  return (
    <div className="App">
      <Header logo={ logo }/>
      <Form data={ data }/>
      <Image xin={ xin }/>
    </div>
  );
}

export default App;
