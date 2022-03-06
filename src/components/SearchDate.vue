<template>
    <div>
        <h3>Матчи</h3>
        <v-row class="justify-space-around my-0">
            <v-col 
                class="py-0" 
                cols="5"
            >
                <SearchDatePiker
                    @takeDate="takeDateFrom"
                    label="c:"
                    :searchDate="dateFrom"
                />
            </v-col> 
            <v-col 
                class="py-0" 
                cols="5"
            >
                <SearchDatePiker 
                    @takeDate="takeDateTo" 
                    label="по:" 
                    :searchDate="dateTo"
                />
            </v-col> 
        </v-row>
    </div>    
</template>

<script>
import SearchDatePiker from './SearchDatePiker.vue'

export default {
    name: 'SearchDate',
    components: { SearchDatePiker },
    props: {
        'routeParams': Object
    },
    data() {
        return {
            entity: this.routeParams.entity,
            id: this.routeParams.id,
            dateFrom: this.$route.query.dateFrom || '',
            dateTo:  this.$route.query.dateTo || ''        
        }
    },
    methods: {
        takeDateFrom(dateFrom) {
            this.dateFrom = dateFrom;
            if (this.dateTo !== '') {
                this.search();                
            }
        },
        takeDateTo(dateTo) {
            this.dateTo = dateTo;
            if (this.dateFrom === '') {
                alert('Выберете дату в поле "с:"');
            } else {
                this.search();
            }
        },
        search() {
            this.$router.push({query: {
                'dateFrom': this.dateFrom, 
                'dateTo': this.dateTo
            }});
            const data = {
                entity: this.entity,
                id: this.id,
                url: `https://api.football-data.org/v2/${this.entity}/${this.id}/matches?dateFrom=${this.dateFrom}&dateTo=${this.dateTo}`
            }
            this.$store.dispatch('get_matches_from_api', data);
        }
    }
}
</script>