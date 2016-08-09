<script>
    import CompanyTools from '../../shared/CompanyTools'

    module.exports = {
        mixins: [CompanyTools],
        data: () => {
            return {
                company: null,
                pictures: null
            }
        },
        ready(){
            if(this.hasPictures()){
                this.pictures = this.company.pictures
            } else {
                this.pictures = this.getNullPicture()
            }
        }
    }
</script>

<template>
    <div class="gallery-container well">
        <img v-for="picture in pictures" v-bind:src="picture.url">
    </div>
</template>

<style lang="sass">
    .gallery-container{
        display: flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        img{
            height:100px;
            width:100px;
            margin:5px;
        }
    }
</style>