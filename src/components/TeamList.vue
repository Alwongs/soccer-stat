<template>
    <div>
        <SearchText/>

        <LoadingShow />

        <ErrorShow />

        <v-row 
            v-if="!isLoading" 
            class="mx-2 mb-16 mt-0"
        >
            <v-col 
                v-for="team in getPaginatedTeams" 
                :key="team.id" 
                cols="12" 
                sm="6" 
                md="4" 
                xl="2"
            >
                <v-card 
                    class="competition" 
                    color="green lighten-5" 
                    :to="{
                        name: 'matches', 
                        params: { 
                            entity: 'teams',
                            id: team.id
                        }
                    }"
                >
                    <v-card-title>
                        {{ team.name }}
                    </v-card-title>
                    <v-card-text>
                        <v-img
                            contain
                            max-height="100"
                            :src="team.crestUrl"
                        ></v-img>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-footer 
            padless 
            absolute
            color="white"
        >
            <v-col
                class="text-center"
                cols="12"
            >
                <v-pagination
                    v-model="page"
                    :length="pageCount"
                    :total-visible="6"
                ></v-pagination>
            </v-col>
        </v-footer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SearchText from './SearchText.vue';
import LoadingShow from './LoadingShow.vue';
import ErrorShow from './ErrorShow.vue';
import paginationMixin from '../mixins/pagination.mixin';

export default {
    name: 'TeamList',
    mixins: [ paginationMixin ],
    components: { 
        SearchText, 
        LoadingShow, 
        ErrorShow 
    },
    computed: {
        ...mapGetters([
            'getTeams', 
            'isLoading'
        ]),
        getPaginatedTeams: function() {
            return this.setupPagination(this.getTeams)
        }
    },
    created() {
        this.$store.dispatch('get_teams_from_api');
    }
}
</script>
