<template>
    <v-row>
        <v-col 
            v-for="match in matches" 
            :key="match.id" 
            class="pa-2" 
            cols="12"
        >
            <v-card>
                <v-card-text class="pa-3 teal lighten-5">
                    <div class="d-flex justify-end">
                        <span class="mr-2">
                            {{ new Date(match.utcDate).toLocaleDateString('ru-RU') }}
                        </span>
                        <span>
                            {{ new Date(match.utcDate).toLocaleTimeString([], hour24Format) }}
                        </span>                     
                    </div>
                    <p class="d-flex justify-space-around my-1">
                        <span class="subtitle-1 font-weight-bold red--text">{{ match.homeTeam.name }}</span>
                        <span class="mx-2">vs</span>
                        <span class="subtitle-1 font-weight-bold red--text">{{ match.awayTeam.name }}</span>
                    </p>
                    <p class="my-1">
                        <span>{{ match.status }}</span> 
                        <span v-if="match.score.fullTime.homeTeam !== null">
                            {{match.score.fullTime.homeTeam}}:{{match.score.fullTime.awayTeam}}
                        </span> 
                        <span v-if="match.score.extraTime.homeTeam !== null"> 
                            ( {{match.score.extraTime.homeTeam}}:{{match.score.extraTime.awayTeam}} ) 
                        </span> 
                        <span v-if="match.score.penalties.homeTeam !== null"> 
                            ( {{match.score.penalties.homeTeam}}:{{match.score.penalties.awayTeam}} ) 
                        </span> 
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'MatchListMobile',
    props: {
        'matches': Array
    },
    data() {
        return {
            hour24Format: {
                hour12: false, 
                hour: '2-digit', 
                minute:'2-digit'
            }
        }
    }
}
</script>