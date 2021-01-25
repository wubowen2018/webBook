<template>
    <div class="ebook">
        <div class="read-wrapper">
            <div id="read">

            </div>
        </div>
    </div>
</template>

<script>
import Epub from 'epubjs'
const URL = '../static/timeManger.epub'

export default {
    name: '',
    data() {
        return {

        }
    },
    props: {

    },
    methods: {
        showEpub(){
            // 生成Book
            this.book = new Epub(URL) 
            console.log(this.book);
            // 生成Rendition
            this.rendition = this.book.renderTo('read',{
               width: window.innerWidth, 
               height: window.innerHeight 
            })
            //通过 Rendition.display 渲染电子书 
            this.rendition.display()
        }
    },
    mounted() {
        this.showEpub()
    }
}

</script>
<style lang="scss" scoped>
@import '../assets/styles/global';


</style>