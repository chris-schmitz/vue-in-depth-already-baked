<script>
    import Contacts from '../../shared/Contacts.vue'
    import Gallery from './Gallery.vue'
    import CompanyTools from '../../shared/CompanyTools'

    module.exports = {
        mixins:[CompanyTools],
        components:{Contacts, Gallery},
        data: () => {
            return {company:null}
        },
        computed:{
            companyDetails(){
                // note: normally I would be a bit adverse to putting html into a calc (e.g. in a sever rendered
                // site I'd never* put html into a method, that's the template's job), but since we're isolating
                // all of the display logic for this component into this one file I feel that it's not as big of a
                // deal. This presentation logic is isolated within this component file, so we don't have to worry
                // about the calculation here having an unexpected effect elsewhere (unless we pass it as a prop or
                // parameter in an event, but we're not doing that here).
                // TL;DR: It's still a good idea to keep your markup in your template, but I feel like it's less of
                // an issue within an isolated component file.
                return `<b>${this.company.name}</b> - ${this.company.address} ${this.company.city}, ${this.company.state}, ${this.company.zip}`
            }
        }
    }
</script>

<template>
    <div class="review-container panel-body">
        <div class="company-name">
            {{{ companyDetails }}}
        </div>
        <div class="row">
            <contacts></contacts>
            <gallery></gallery>
        </div>
    </div>
</template>

<style lang="sass">
    .review-container{
        display:flex;
        flex-direction: column;

        .company-name{
            font-size:15pt;
        }

        > * {
            flex:1;
            margin:5px;
        }

        .row{
            display:flex;
            flex-direction:row;

            > * {
                flex:1;
                margin-right:5px;
            }
        }
    }
</style>