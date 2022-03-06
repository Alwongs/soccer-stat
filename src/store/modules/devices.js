export default {
    getters: {
        isMobile(state) {
            return state.isMobile
        }
    },
    state: { 
        isMobile: false,
    },
    mutations: {
        SET_MOBILE_MODE(state) {
            state.isMobile = true;
        },
        SET_PC_MODE(state) {
            state.isMobile = false;
        }
    }
}