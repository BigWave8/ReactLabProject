import { createStore } from "redux";
import reducers from "./Reduser";

const initialState = {
  reservations: [],
  totalPrice: 0,
};

const store = createStore(reducers, initialState);

export default store;
