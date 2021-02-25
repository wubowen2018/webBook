<template>
    <div >
      <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="已完成"></el-step>
        <el-step title="进行中"></el-step>
        <el-step title="步骤 3"></el-step>
        </el-steps>

    </div>
</template>

<script>

export default {
  data () {
    return {
       step: 1      
    };
  },

  components: {},

  computed: {},

  mounted() {

  },

  beforeDestory() {},

  methods: {
    next() {
        if (this.step++ > 2) this.step = 1;
    }
  }
}

</script>
<style lang="scss" scoped>
// @import '../assets/styles/global.scss';

.wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    padding: px2rem(15);
    flex-direction: column;
    background: #f5f5f5;
    .stepsDiv{
        flex: 1;
        .next{

        }
        .steps{
            
        }

    }



}
</style>