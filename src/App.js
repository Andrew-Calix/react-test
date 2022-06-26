import logo from './logo.svg';
import Contact from './components/Contact';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header branding = "Contact Manager1"/>  
      
      <Contact name='Mugiwara no luffy' email='fasdf@gmail.com' number='555'/>
      <Contact name='Mugiwara no luffy' email='fasdf@gmail.com' number='555'/>
      <Contact name='Mugiwara no luffy' email='fasdf@gmail.com' number='555'/>
    </div>
  );
}

export default App;
