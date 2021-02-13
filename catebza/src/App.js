
import './App.css';
import MainNav from "./Components/mainNav"
import HomePage from "./Components/homepage"
import Products from "./Components/products"
import Contacts from "./Components/contact"
import BananaReel from "./Components/BananaGallery"
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
//import Contact from './Components/contact';
import ScrollToTop from "./Components/scrollToTop"
import AtchaarGallery from './Components/AtchaarGallery';
import AtchaarDyeGallery from "./Components/AtchaarDyeGallery";
import AtchaarSpicesGallery from "./Components/AtchaarSpicesGallery";

function App() {

  return (
    <div className="App">
      <Router >
      <ScrollToTop />
      <MainNav />
      <Switch>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/products" exact component={Products}></Route>
      <Route path="/products/bananas" exact component={BananaReel}></Route>
      <Route path="/products/atchaar" exact component={AtchaarGallery} />
      <Route path="/products/AtchaarDye" exact component={AtchaarDyeGallery} />
      <Route path="/products/AtchaarSpices" exact component={AtchaarSpicesGallery} />
      <Route path="/contact" exact component={Contacts} />
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
