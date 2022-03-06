import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage.vue';
import CompetitonList from '../components/CompetitionList.vue';
import TeamList from '../components/TeamList.vue';
import MatchList from '../components/MatchList.vue';
import NotFound from '../components/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/competitions',
    name: 'competitions',
    component: CompetitonList
  },
  {
    path: '/teams',
    name: 'teams',
    component: TeamList
  },
  {
    path: '/:entity/:id/matches',
    name: 'matches',
    component: MatchList
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
