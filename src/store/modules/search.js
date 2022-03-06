export default {
    getters: {
        getDateFrom(state) {
            return state.dateFrom;
        },
        getDateTo(state) {
            return state.dateTo;
        },
        getText(state) {
            return state.text;
        }
    },
    state: {
        dateFrom: '',
        dateTo: '',
        text: ''
    },
    mutations: {
        UPDATE_DATES(state, dates) {
            state.dateFrom = dates.dateFrom;
            state.dateTo = dates.dateTo;
        },
        UPDATE_TEXT(state, text) {
            state.text = text;
        }
    },
    actions: {
        find_items_by_text({dispatch, commit, getters}, data) {
            commit('UPDATE_TEXT', data.text);
            if (data.route === '/teams') {
                dispatch('get_teams_from_api');
                commit('FIND_TEAMS_BY_TEXT', getters.getText);
            } else if (data.route === '/competitions') {
                dispatch('get_competitions_from_api');                
                commit('FIND_COMPETITIONS_BY_TEXT', getters.getText);
            }
        }
    }
}