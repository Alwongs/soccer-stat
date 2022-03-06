<template>
    <div>
        <v-menu
            v-model="menu"
            ref="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
            :left="true"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="date"
                    class="py-1"
                    :label="label"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
            </template>                
            <v-date-picker 
                v-model="date" 
                no-title 
                scrollable
            >
                <v-spacer></v-spacer>
                <v-btn 
                    text 
                    color="primary" 
                    @click="menu = false"
                >
                    Cancel
                </v-btn>
                <v-btn 
                    text 
                    color="primary" 
                    @click="$refs.menu.save(date); takeDate();"
                >
                    OK
                </v-btn>
            </v-date-picker>
        </v-menu>
    </div>
</template>

<script>
export default {
    name: 'SearchDatePiker',
    props: {
        'label': String,
        'searchDate': String
    },
    data() {
        return {
            menu: false,
            date: this.searchDate,     
        }
    },
    methods: {
        takeDate() {
            this.$emit('takeDate', this.date);
        }
    }
}
</script>