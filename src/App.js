import './App.css';
import { addToCart } from './redux/action';
import {  useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch() ; 

  const product = {
    name : "Peanut Butter" , 
    category  : "food" , 
    price : "300", 
    color : "brown "
   }
  return (
    <div className="App">
      <header className="App-header">
        Hello Shivam
      </header>
      <button onClick={ () => dispatch(addToCart(product))}>add to c 

      </button>
    </div>
  );
}

export default App;
