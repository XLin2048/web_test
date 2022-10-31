import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/HomePage.vue'
import PersonalPage from "@/components/PersonalPage";
import FacultyNews from "@/components/FacultyNews";

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: '/personal',
                    name: 'personalPage',
                    component: PersonalPage,
                },
                {
                    path: '/faculty',
                    name: 'FacultyNews',
                    component: FacultyNews,
                }
            ]
        },
        {path: '/', redirect: '/home'},

    ]
})
export default router