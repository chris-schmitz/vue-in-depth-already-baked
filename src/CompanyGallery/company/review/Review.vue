<script>
    import Contacts from '../../shared/Contacts.vue'
    import Gallery from './Gallery.vue'

    module.exports = {
        components:{Contacts, Gallery},
        data: () => {
            return {}
        }
    }
</script>

<template>
    <div class="review-container panel-body">
        <contacts></contacts>
        <gallery></gallery>
    </div>
</template>

<style lang="sass">
    .review-container{
        display:flex;
        flex-direction: row;

        > * {
            flex:1;
            margin:5px;
        }
    }
</style>