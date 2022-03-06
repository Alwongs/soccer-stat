<template>
    <v-row 
        v-if="this.$store.getters.isLoading" 
        class="text-center pa-6"
    >
        <v-col>
            <v-progress-circular                    
                indeterminate
                color="blue-grey"
            ></v-progress-circular>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: 'LoadingShow'
}
</script>