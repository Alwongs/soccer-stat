import Vue from 'vue';
import Vuex from 'vuex';
import competitions from './modules/competitions';
import teams from './modules/teams';
import matches from './modules/matches';
import search from './modules/search';
import loading from './modules/loading';
import devices from './modules/devices';
import token from './modules/token';
import errors from './modules/errors';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        competitions,
        teams,
        matches,
        search,
        loading,
        devices,
        token,
        errors
    },
    plugins: [createPersistedState()]
});