<script>
    import state from '../../shared/State.js'

    module.exports = {
        data: () => {
            return {
                // state: state,
                companies: state.companies
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
    <table class="table company-list">
        <tr v-for="company in companies">
            <td>
                <span>
                    {{ company.name }}
                </span>
                <button v-on:click="show(company)" class="btn btn-primary pull-right">
                    <i class="fa fa-info-circle"></i>
                </button>
            </td>
        </tr>
    </table>
</template>

<style lang="sass">
    .company-list{
        button{
            margin-right: 7px;
        }
    }
</style>