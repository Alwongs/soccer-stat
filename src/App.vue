<template>
    <v-app>
        <AppNavPanel />
        <v-main>
            <router-view class="view"/>
        </v-main>
    </v-app>
</template>

<script>
import AppNavPanel from './components/AppNavPanel.vue';
import { mapMutations } from 'vuex';

export default {
    name: 'App',
    components: { AppNavPanel },
    watch: {
        $route(to, from) {
            if(from.name !== to.name) {
                this.UPDATE_TEXT('');
                this.CLEAR_ERROR();
            }
        }
    },
    methods: {
        ...mapMutations([
            'UPDATE_TEXT',
            'CLEAR_ERROR',
            'SET_MOBILE_MODE',
            'SET_PC_MODE'
        ]),
        getDevice() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                this.SET_MOBILE_MODE();
            } else {
                this.SET_PC_MODE();
            }
        }
    },
    mounted() {
        this.getDevice();
    }
}
</script>
