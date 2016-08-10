<script>
    import State from '../CompanyGallery/shared/State'
    import CompanyTools from '../CompanyGallery/shared/CompanyTools'

    module.exports = {
        mixins:[CompanyTools],
        data: () => {
            return {name: 'test'}
        },
        computed:{
            currentRoute() {
                return this.$route.name
            },
            showBackToListButton() {
                return this.currentRoute === 'reviewCompany'
            },
            showCreateButton() {
                return this.currentRoute === 'companyList'
            },
            showEditButton() {
                return this.currentRoute === 'reviewCompany'
            },
            showSaveButton() {
                return this.currentRoute === 'editCompany' || this.currentRoute === 'createCompany'
            }
        },
        methods:{
            goToListView() {
                this.$router.go({name:'companyList'})
            },
            createANewCompany() {
                // debugger
                this.$dispatch('applyMask', 'Creating...', true)
                this.$http.post('/companies')
                .then((response) => {
                    this.$dispatch('removeMask')
                    console.log(response)
                    this.$router.go({name:'createCompany', params:{ id: 'new' }})
                }).catch((response) => {
                    this.$dispatch('removeMask')
                    console.error("Error creating a new company.")
                })
                // mask
                // create a new company
                // unmask
                // navigate
            },
            editCompany() {
                this.$router.go({name:'editCompany', params:{ id: this.$route.params.id }})
            },
            saveChanges() {
                // so what do we need to handle here?
                // EVERYTHING happening from here should be a PUT command, i.e. if we're editing an existing
                // company we want to transfer that company's state back up to the server (not just update what's there in case someone deleted data)
                // but also, if we're creating a new company, the creation of the record should happen at the `createANewCompany` level, not here. We
                // already need the id for this company.
                this.$dispatch('showNotification', 'success', 'Changes saved.')
                this.$router.go({name:'reviewCompany', params:{ id: this.$route.params.id }})
            }
        }
    }
</script>

<template>
    <div class="clearfix">
        <button v-if="showBackToListButton" @click="goToListView" class="btn btn-primary"><i class="fa fa-arrow-circle-left"></i></button>
        <button v-if="showEditButton" @click="editCompany" class="btn btn-success pull-right"><i class="fa fa-pencil-square-o"></i></button>
        <button v-if="showCreateButton" @click="createANewCompany" class="btn btn-success pull-right"><i class="fa fa-plus-circle"></i></button>
        <button v-if="showSaveButton" @click="saveChanges" class="btn btn-success pull-right"><i class="fa fa-floppy-o"></i></button>
    </div>
</template>

<style lang="">
</style>