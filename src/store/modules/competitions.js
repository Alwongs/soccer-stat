import axios from 'axios';

export default {
    getters: {
        getCompetitions(state) {
            return state.competitions;
        }
    },
    state: {
        competitions: []
    },
    mutations: {
        UPDATE_COMPETITIONS(state, competitions) {
            state.competitions = competitions;
        },
        FIND_COMPETITIONS_BY_TEXT(state, text) {
            let array = [];         
            state.competitions.map(competition => {
                if(competition.name.toLowerCase().includes(text.toLowerCase())) {
                    array.push(competition);
                }
            });
            state.competitions = array;
        }
    },
    actions: {
        get_competitions_from_api({commit, getters}) {
            commit('START_LOADING');
            axios.get('http://api.football-data.org/v2/competitions', {
                headers: {
                    'X-Auth-Token': getters.token
                }
            })
            .then((response) => {
                commit('UPDATE_COMPETITIONS', response.data.competitions);
            })
            .catch(error => {
                if(error.request) {
                    commit('RESTRICT_TOKEN');
                }
            })
            .finally(() => {
                commit('FIND_COMPETITIONS_BY_TEXT', getters.getText);
                commit('STOP_LOADING');
            })
        }
    }
}