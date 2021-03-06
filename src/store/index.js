import Vue from 'vue'
import Vuex from 'vuex'
import ticket from "./ticket";
import contact from "./contact";
import client from "./client";

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        ticket,
        contact,
        client,
    }
})
