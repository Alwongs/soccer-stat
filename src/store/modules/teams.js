import axios from 'axios';

export default {
    getters: {
        getTeams(state) {
            return state.teams;
        }
    },
    state: {
        teams: []
    },
    mutations: {
        UPDATE_TEAMS(state, teams) {
            state.teams = teams;
        },
        FIND_TEAMS_BY_TEXT(state, text) {
            let array = [];         
            state.teams.map(team => {
                if(team.name.toLowerCase().includes(text.toLowerCase())) {
                    array.push(team);
                }
            });
            state.teams = array;
        },
    },
    actions: {
        get_teams_from_api({commit, getters}) {
            commit('START_LOADING');
            axios.get('http://api.football-data.org/v2/teams', {
                headers: {
                    'X-Auth-Token': getters.token
                }
            })
            .then((response) => {
                commit('CLEAR_ERROR')
                commit('UPDATE_TEAMS', response.data.teams);
            })
            .catch(error => {
                if(error.request) {
                    commit('RESTRICT_TOKEN')
                }
            })
            .finally(() => {
                commit('FIND_TEAMS_BY_TEXT', getters.getText);
                commit('STOP_LOADING');
            });
        },
        get_team_name_from_api({commit, getters}, id) {
            axios.get(`http://api.football-data.org/v2/teams/${id}`, {
                headers: {
                    'X-Auth-Token': getters.token
                }
            })
            .then((response) => {
                commit('UPDATE_ENTITY_NAME', response.data.name);
            })
            .catch(error => {
                if(error.request) {
                    commit('RESTRICT_TOKEN')
                }
            })
            .finally(() => {
            });            
        }
    }
}