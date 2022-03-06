import axios from 'axios'

export default {
    getters: {
        getEntityName(state) {
            return state.entityName;
        },
        getMatches(state) {
            return state.matches;
        }
    },
    state: { 
        entityName: '',
        matches: []
    },
    mutations: {
        UPDATE_ENTITY_NAME(state, entityName) {
            state.entityName = entityName;
        },
        UPDATE_MATCHES(state, matches) {
            state.matches = matches;
        },
    },
    actions: {
        get_matches_from_api({commit, dispatch, getters}, data) {
            commit('CLEAR_ERROR');
            commit('START_LOADING');
            axios.get(data.url, {
                headers: {
                    'X-Auth-Token': getters.token
                }
            })
            .then((response) => {                
                if (data.entity === 'competitions') {
                    commit('UPDATE_ENTITY_NAME', response.data.competition.name);
                } else if (data.entity === 'teams') {
                    dispatch('get_team_name_from_api', data.id);
                }           
                commit('UPDATE_MATCHES', response.data.matches); 
            })
            .catch(error => {
                commit('UPDATE_MATCHES', []); 
                commit('SET_ERROR', error.response.statusText)
            })
            .finally(() => {
                commit('STOP_LOADING');
            })
        },
    },
}