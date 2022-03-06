<template>
    <v-row class="text-center pa-16">
        <v-col>
            <v-dialog
                v-model="dialog"
                width="500"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="blue lighten-2"
                        dark
                        v-bind="attrs"
                        v-on="on"
                    >
                        Ввести токен
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                        Введите токен
                    </v-card-title>

                    <v-card-text>
                        <v-text-field
                            v-model="inputToken"
                            label=""
                            :rules="rules"
                            hide-details="auto"
                        ></v-text-field>
                    </v-card-text>
            
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            text
                            @click="closeDialog"
                        >
                            Выйти
                        </v-btn>

                        <v-btn
                            color="primary"
                            text
                            @click="saveToken();"
                        >
                            Сохранить
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'tokenInput',
    data() {
        return {  
            dialog: this.$store.getters.isTokenEmpty,          
            inputToken: '',
            rules: [
                value => !!value || 'Required.'
            ],
        }
    },
    methods: {
        saveToken() {
            this.$store.commit('SAVE_TOKEN', this.inputToken);
            this.$store.dispatch('get_teams_from_api');
            this.dialog = false;
        },
        closeDialog() {
            this.dialog = false;            
        }
    }
}
</script>