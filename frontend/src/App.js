import './App.css';
import WomensProducts from './Pages/Womens/WomensProducts';
import MensProducts from './Pages/Mens/MensProducts';
import KidsProducts from './Pages/Kids/KidsProducts';
import ShoesBagsProducts from './Pages/Shoes&Bags/ShoesBagsProducts';
import Beauty from './Pages/Beauty/Beauty';

function App() {
  return (
    <div className="App">
      <WomensProducts/>
      <MensProducts/>
      <KidsProducts/>
      <ShoesBagsProducts/>
      <Beauty/>
    </div>
  );
}

export default App;
