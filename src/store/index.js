import { createStore } from "vuex";
import tracker from "./modules/tracker";

const store = new createStore({
  modules: {
    tracker,
  },
});

export default store;
