<template>
    <v-container>
        <LoadingShow />
        
        <ErrorShow />

        <TokenInput />
    </v-container>
</template>

<script>
import TokenInput from './TokenInput.vue';
import LoadingShow from './LoadingShow.vue';
import ErrorShow from './ErrorShow.vue';

export default {
    name: 'HomePage',
    components: { 
        TokenInput, 
        LoadingShow, 
        ErrorShow 
    }
}
</script>
