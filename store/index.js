import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  state: {
    barIndex: "1"
  },
  getters: {
    barIndex: state => state.barIndex
  },
  mutations: {
    CHANGE_INDEX(state, value) {
      state.barIndex = value;
      window.sessionStorage.setItem("barIndex", value);
    }
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

export default () => store;
