<template>
    <div>
        <v-app-bar 
            color="green accent-4"
            dense
            dark
            app
        >    
            <v-app-bar-nav-icon 
                @click.stop="drawer = !drawer"
                class="hidden-md-and-up"
            ></v-app-bar-nav-icon>
            <v-col class="hidden-sm-and-down">
                <v-btn
                    v-for="btn in buttons"
                    :key="btn.id" 
                    :to="btn.link"
                    text 
                >
                    {{ btn.text }}
                </v-btn>
            </v-col>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            left
            temporary
            class="hidden-md-and-up"
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"
                    active-class="text--accent-4"
                >
                    <v-list-item
                        v-for="btn in buttons"
                        :key="btn.id" 
                        :to="btn.link"
                    >
                        <v-list-item-title>{{ btn.text }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>

export default {
    name: 'AppNavPanel',
    data() {
        return {
            drawer: false,
            group: null,
            buttons: [
                {
                    id: 1,
                    link: '/',
                    text: 'SoccerStat'
                },
                {
                    id: 2,
                    link: '/competitions',
                    text: 'Лиги'
                },
                {
                    id: 3,
                    link: '/teams',
                    text: 'Команды'
                }
            ]
        }
    }
}
</script>