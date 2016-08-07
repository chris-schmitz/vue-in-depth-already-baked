<script>
    import State from '../CompanyGallery/shared/State'

    module.exports = {
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
                this.$router.go({name:'createCompany', params:{ id: 'new' }})
            },
            editCompany() {
                this.$router.go({name:'editCompany', params:{ id: this.$route.params.id }})
            },
            saveChanges() {
                this.$router.go({name:'reviewCompany', params:{ id: this.$route.params.id }})
            }
        }
    }
</script>

<template>
    <div class="clearfix">
        <button v-if="showBackToListButton" @click="goToListView" class="btn btn-primary"><i class="fa fa-arrow-circle-left"></i></button>
        <button v-if="showEditButton" @click="editCompany" class="btn btn-success pull-right"><i class="fa fa-pencil-square-o"></i></button>
        <button v-if="showCreateButton" @click="createANewCompany" class="btn btn-success"><i class="fa fa-plus-circle"></i></button>
        <button v-if="showSaveButton" @click="saveChanges" class="btn btn-success pull-right"><i class="fa fa-floppy-o"></i></button>
    </div>
</template>

<style lang="">
</style>