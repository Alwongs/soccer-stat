export default {
    getters: {
        token(state) {
            return state.token
        },
        isTokenEmpty(state) {
            if (state.token === '') {
                return true;
            } else {
                return false;
            }
        }
    },
    state: { 
        token: ''
    },
    mutations: {
        SAVE_TOKEN(state, token) {
            state.token = token
        }
    }
}