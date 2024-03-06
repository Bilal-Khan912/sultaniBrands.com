import './App.css';
import Layoutpage from './layout/Layoutpage.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Contact from './components/Contact.js'
import Register from './components/Register.js'
import Login from './components/Login.js'
import Errorpage from './components/Errorpage.js';
import Mencards from './PAGES/CARDS/Mencards.js/Mencards.js';
import Womencards from './PAGES/CARDS/womencards/Womencards.js';
import Homedetailpage from './PAGES/DETAILPAGEs/Homedetailpage.js';
import Womenshoescards from './PAGES/CARDS/womencards/Womenshoescards.js';
import Menshoescards from './PAGES/CARDS/Mencards.js/Menshoescards.js';
// import Womenclodetail from './PAGES/DETAILPAGEs/Womenclodetail.js';
// import Womenshoesdetail from './PAGES/DETAILPAGEs/Womenshoesdetail.js';
// import Menclodetail from './PAGES/DETAILPAGEs/Menclodetail.js';
// import Menshoesdetail from './PAGES/DETAILPAGEs/Menshoesdetail.js';
import Addcart from './PAGES/addcartproducts/Addcart.js';
import Sale from './PAGES/CARDS/newsale/Sale.js';
import Underonehundred from './PAGES/CARDS/newsale/Under6000.js';
import Under6000 from './PAGES/CARDS/newsale/Under6000.js';
import Under5000 from './PAGES/CARDS/newsale/Under5000.js';
import Under4000 from './PAGES/CARDS/newsale/Under4000.js';
import Under3000 from './PAGES/CARDS/newsale/Under3000.js';
import Otherlowprice from './PAGES/CARDS/newsale/Otherlowprice.js';


function App() {
  return (
    <div className="App">      

      <BrowserRouter>

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Homedetailpage />} />
              <Route path="/cont" element={<Contact />} />
                 <Route path='/men' element ={<Mencards/>}/>
                 <Route path='/women' element={<Womencards/>}/>
                 <Route path='/menshoes' element={<Menshoescards/>}/>
              <Route path="/reg" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Errorpage />} />
              <Route path='/womenshoes' element={<Womenshoescards/>}/>
              <Route path='/addcart' element={<Addcart/>}/>
              <Route path='/sale' element={<Sale/>}/>

              {/* <Route path="/sale/:id" element={<Homedetailpage />} /> */}

              <Route path='/under6000' element={<Under6000/>}/>
             

              <Route path='/under5000' element={<Under5000/>}/>
             
              <Route path='/under4000' element={<Under4000/>}/>
            

              <Route path='/under3000' element={<Under3000/>}/>
              <Route path='/Otherlowprice' element={<Otherlowprice/>}/>
           
          </Routes>

      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
