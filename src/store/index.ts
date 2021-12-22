import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/types/root";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    helloWorld: "Hello world",
  },
  modules: {},
};

export default new Vuex.Store<RootState>(store);
