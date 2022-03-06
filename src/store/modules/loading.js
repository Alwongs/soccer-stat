export default {
    getters: {
        isLoading(state) {
            return state.isloading
        },
        isRouteChanged(state) {
            return state.isRouteChanged
        },
    },
    state: { 
        isRouteChanged: false, 
        isloading: true
    },
    mutations: {
        START_LOADING(state) {
            state.isloading = true;
        },
        STOP_LOADING(state) {
            state.isloading = false;
        },
        UPDATE_IS_ROUTE_CHANGED(state, value) {
            state.isRouteChanged = value;
        },
    },
    actions: {
    },
}