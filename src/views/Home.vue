<template>
  <div class="home">
    <div class="ebook" @click="handleClick('/ebook')">ebook</div>
    <div class="mangda" @click="handleClick('/mangda')">盲打</div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
    
  },
  methods:{
    handleClick(path){
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss">
.home{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .ebook{

  }
  .mangda{

  }

}

</style>