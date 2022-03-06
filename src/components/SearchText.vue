<template>
    <v-row 
        class="mt-1 px-3" 
        justify="start"
    >
        <v-col 
            class="py-0 mb-0" 
            cols="12" 
            sm="8" 
            md="5" 
            xl="3"
        >                            
            <v-text-field 
                v-model="text"
                class="my-0 px-2" 
                id="newTodo" 
                name="newTodo" 
                label="поиск" 
                @keyup.enter="search"
            />
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'SearchText',
    data() {
        return {
            text: this.$store.getters.getText || ''
        }
    },
    methods: {
        search() {
            this.$store.dispatch('find_items_by_text', {
                text: this.text,
                route: this.$route.path
            });
        }
    }
}
</script>