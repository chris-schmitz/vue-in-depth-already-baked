import State from './State'

// Does it make sense to separate this from state? Should some of the stuff from state come over here?
// Review how vuex separates state from tools to work with state to get perspective

let CompanyTools = {
    created(){
        this.company = State.getCompanyById(this.$route.params.id)
    },
    methods:{
        hasContacts(){
            return Object.getOwnPropertyNames(this.company.contacts).length > 0
        },
        hasPictures(){
            return Object.getOwnPropertyNames(this.company.pictures).length > 0
        },
    }
}

export default CompanyTools