import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
import { Provider } from "react-redux";
import store from "./Utils/Redux/Store";

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <Navigation />
      </Provider>
      <Footer />
    </div>
  );
}

export default App;