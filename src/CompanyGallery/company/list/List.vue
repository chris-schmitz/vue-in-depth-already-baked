<script>
    import state from '../../shared/State.js'

    module.exports = {
        data: () => {
            return {
                companies: state.getCompanies()
            }
        },
        methods: {
            show (company){
                this.$router.go({ name: 'reviewCompany', params:{id: company.id} })
            }
        }
    }
</script>

<template>
    <table class="table">
        <tr v-for="company in companies">
            <td>
                {{ company.name }}
                <button v-on:click="show(company)" class="btn btn-primary pull-right">
                    <i class="fa fa-info-circle"></i>
                </button>
            </td>
        </tr>
    </table>
</template>

<style lang="">
</style>