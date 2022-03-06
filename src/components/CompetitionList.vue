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
                v-for="competition in getPaginatedCompetitions" 
                :key="competition.id" 
                cols="12" 
                sm="12" 
                md="6" 
                xl="4"
            >
                <v-card             
                    class="green lighten-5"
                    :to="{ 
                        name: 'matches', 
                        params: {
                            entity: 'competitions',
                            id: competition.code
                        }
                    }"
                >
                    <v-card-title>
                        {{ competition.name }}
                    </v-card-title>
                    <v-card-text>
                        {{ competition.area.name }}
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
    name: 'CompetitionList',
    components: { 
        SearchText, 
        LoadingShow, 
        ErrorShow 
    },
    mixins: [ paginationMixin ],
    computed: {
        ...mapGetters([
            'getCompetitions', 
            'isLoading', 
            'errorMessage'
        ]),
        getPaginatedCompetitions: function() {
            return this.setupPagination(this.getCompetitions);
        }
    },
    created() {
        this.$store.dispatch('get_competitions_from_api');
    }
}
</script>
