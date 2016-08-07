import Vue from 'vue'
import VueRouter from 'vue-router'

import style from './sass/global.scss'

import App from './App.vue'
import List from './CompanyGallery/company/list/List.vue'
import Build from './CompanyGallery/company/build/Build.vue'
import Review from './CompanyGallery/company/review/Review.vue'

Vue.use(VueRouter)
let router = new VueRouter()

router.map({
    '/list':{
        name: 'companyList',
        component: List
    },
    '/review/:id':{
        name: 'reviewCompany',
        component: Review
    },
    '/edit/:id':{
        name: 'editCompany',
        component: Build
    },
    '/create':{
        name: 'createCompany',
        component: Build
    }
})

router.start(App, '#app')