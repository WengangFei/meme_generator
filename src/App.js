import Header from './components/header';
import Form from './components/form';
import Image from './components/displayImage';
import logo from './images/logo.png';

function App() {
  return (
    <div className="App">
      <Header logo={ logo }/>
      <Form />
      <Image />
    </div>
  );
}

export default App;
