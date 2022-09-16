import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Shop from './components/Shop';
import TodoApp from './components/TodoApp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './container/Product';
import Tshirt from './container/Tshirt';
import Shirt from './container/Shirt';
import Shooes from './container/Shooes';
import Header from './contact/Header';
import Email from './contact/Email';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
       <Product />
      <Routes>
        <Route path="/t-shirt" element={<Tshirt/>}/>
        <Route path="/shirt" element={<Shirt/>}/>
        <Route path="/shooes" element={<Shooes/>}/>
      </Routes>
   </BrowserRouter>
     
      <Welcome />
      <Shop />
      <TodoApp />
      <Header />
      <Email/>
      

      


     
    </div>
  );
}

export default App;
