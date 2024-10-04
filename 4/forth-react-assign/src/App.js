import React from "react";
import customStore from "./redux/store";
import { Provider } from "react-redux";
import Rooms from "./components/Rooms/Rooms";

import "./style/sass/main.scss";

const App = () => {
  return (
    <Provider store={customStore}>
 <Rooms></Rooms>
    </Provider>
  );
};

export default App;
