<template>
    <div>
        <v-row class="pt-1 pb-0">
            <v-col>
                <v-breadcrumbs :items="breadcrumbs_items"></v-breadcrumbs>
            </v-col>
        </v-row>

        <v-row class="mx-2 my-0">
            <v-col 
                class="py-0" 
                cols="12" 
                sm="9" 
                md="6" 
                xl="3"
            >
                <SearchDate :route-params="this.$route.params" />
            </v-col>
        </v-row> 

        <LoadingShow />

        <ErrorShow />

        <v-row 
            v-if="!isLoading" 
            class="mb-16 mt-0"
        >
            <v-col class="mx-5 pt-0">               
                <MatchListMobile 
                    v-if="isMobile"
                    :matches="getPaginatedMatches" 
                />
                <MatchListTable 
                    v-if="!isMobile"
                    :matches="getPaginatedMatches" 
                />
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
import SearchDate from './SearchDate.vue';
import LoadingShow from './LoadingShow.vue';
import ErrorShow from './ErrorShow.vue';
import MatchListTable from './MatchListTable.vue';
import MatchListMobile from './MatchListMobile.vue';
import { mapGetters } from 'vuex';
import breadcrumbsMixin from '../mixins/breadcrumbs.mixin';
import paginationMixin from '../mixins/pagination.mixin';

export default {
    name: 'MatchList',
    components: { 
        SearchDate, 
        MatchListMobile, 
        MatchListTable, 
        LoadingShow,
        ErrorShow 
    },
    mixins: [
        breadcrumbsMixin, 
        paginationMixin
    ],
    data() {
        return {
            entity: this.$route.params.entity,
            id: this.$route.params.id,
            dateFrom: this.$route.query.dateFrom ? this.$route.query.dateFrom : '',
            dateTo: this.$route.query.dateTo ? this.$route.query.dateTo :  '',
        }
    },
    computed: {
        ...mapGetters([
            'getMatches', 
            'getEntityName', 
            'isMobile', 
            'isLoading'
        ]),
        getPaginatedMatches: function() {
            return this.setupPagination(this.getMatches);
        }
    },
    created() {
        this.$store.dispatch('get_matches_from_api', {
            entity: this.entity, 
            id: this.id, 
            url: `https://api.football-data.org/v2/${this.entity}/${this.id}/matches?dateFrom=${this.dateFrom}&dateTo=${this.dateTo}`
        });
    }
}
</script>