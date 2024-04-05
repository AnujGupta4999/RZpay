
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./Home"
import  PaymentSuccess  from "./PaymentSuccess"

function App() {
  return (
  // write a fucntion to make a input as a string
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/paymentsuccess" element={<PaymentSuccess/>} /> 

      </Routes>
    </Router>
  );
}


export default App;

