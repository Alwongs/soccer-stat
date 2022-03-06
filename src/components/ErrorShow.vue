<template>
    <v-row 
        v-if="errorMessage && !isLoading"
        class="pa-6"
    >
        <v-col>
            <v-alert
                type="error"
            >
                {{ errorMessage }}
            </v-alert>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ErrorShow',
    computed: mapGetters([
        'errorMessage',
        'isLoading'
    ])
}
</script>