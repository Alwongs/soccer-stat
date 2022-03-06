export default {
    getters: {
        errorMessage(state) {
            return state.errorMessage
        }
    },
    state: { 
        errorMessage: null
    },
    mutations: {
        SET_ERROR(state, statusText) {
            if (statusText === 'Forbidden') {
                state.errorMessage = 'На вашем тарифе выбранные данные недоступны!';
            }
        },
        CLEAR_ERROR(state) {
            state.errorMessage = null;
        },
        RESTRICT_TOKEN(state) {
            state.errorMessage = 'Неверный токен!';            
        }
    }
}