<template>
    <v-card>
        <v-card-text class="pa-0">
            <v-simple-table>
                <template>
                    <tbody>
                        <tr 
                            v-for="match in matches" 
                            :key="match.id"
                        >
                            <td>{{ new Date(match.utcDate).toLocaleDateString('ru-RU') }}</td>
                            <td>{{ new Date(match.utcDate).toLocaleTimeString([], hour24Format) }}</td>
                            <td>{{ match.status }}</td>
                            <td class="text-right">{{ match.homeTeam.name }}</td>
                            <td class="text-center">-</td>
                            <td>{{ match.awayTeam.name }}</td>
                            <td>
                                <span v-if="match.score.fullTime.homeTeam !== null"> 
                                    {{match.score.fullTime.homeTeam}}:{{match.score.fullTime.awayTeam}} 
                                </span> 
                                <span v-if="match.score.extraTime.homeTeam !== null">
                                     ( {{match.score.extraTime.homeTeam}}:{{match.score.extraTime.awayTeam}} ) 
                                </span> 
                                <span v-if="match.score.penalties.homeTeam !== null">
                                     ( {{match.score.penalties.homeTeam}}:{{match.score.penalties.awayTeam}} ) 
                                </span> 
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'MatchListTable',
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