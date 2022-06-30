import logo from './logo.svg';
import Contact from './components/Contact';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header branding = "Contact Manager1"/>  
      <div className='container'>
      <Contact name='Monkey D Luffy' email='niku@gmail.com' number='555'/>
      <Contact name='Roronoa Zoro' email='katana@gmail.com' number='666'/>
      <Contact name='Kuro Hashi Sanji' email='onna@gmail.com' number='777'/>
      </div>
    </div>
  );
}

export default App;
