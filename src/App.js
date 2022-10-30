
import './App.css';
import Footer from './components/footer/Footer';
import Links from './components/links/Links';
import Profile from './components/profile/Profile';
import Icons from './components/socialIcons/Icons';

function App() {
  return (
    <>
      <div className="App">
        <Profile/>
        <Links/>
        <Icons/>
      </div>
        <Footer/>
    </>
  );
}

export default App;
