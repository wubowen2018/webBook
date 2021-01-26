<template>
  <div class="wrapper">
      <div class="left">
          <div class="main">
              <div class="character">L</div>
          </div>
          <div class="bottom">
              <el-button type='primary' class="item" @click="start()">开始</el-button>
              <el-button type='primary' class="item" @click="stop()">停止</el-button>
              <el-button type="danger" class="item" icon="el-icon-delete" circle></el-button>
          </div>
      </div>
      <div class="right"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
             
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    start(){
        this.$message.success('ok')
    },
    stop(){
        this.$message.error('failed')
    }
  }
}

</script>
<style lang="scss" scoped>
@import '../assets/styles/global.scss';
.wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background: #f5f5f5;

    .left{
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: px2rem(15);

        .main{
            flex: 1;  
            display: flex;
            border: px2rem(1) solid #eee;
            box-sizing: border-box;
            border-radius: px2rem(5);
            box-shadow: inset 0 0 px2rem(3) rgba(0, 0, 0, 0.1);
            .character{
                flex: 1;
                color: aqua;
                font-weight: 500;
                font-size: px2rem(300);
                @include center;
            }
        }
        .bottom{
            flex: 0 0 px2rem(60);
            display: flex;
            .item{
                margin: px2rem(10);
                flex: 1;
            }

        }
    }
    .right{
        flex: 0 0 px2rem(250);
        height: 100%;
        padding: px2rem(15);


    }
}
</style>