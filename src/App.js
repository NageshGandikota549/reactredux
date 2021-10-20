/* eslint-disable react/jsx-no-undef */
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProductDetails } from "./components/productDetails";
import { ProductList } from "./components/productList";
import { Header } from './components/header';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/product/:id" exact component={ProductDetails}></Route>
          <Route>404 Not Found</Route>
        </Switch>
      </BrowserRouter>
      <div className="footer"><Header/></div>

    </div>
  );
}

export default App;
