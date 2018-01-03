<template>
  <div>
    <h1 v-once>this is {{mesg}}</h1>
    <button type="button" @click="request">click</button>
    <button type="button" @click="gotoRegister">gotoRegister</button>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        mesg: 'Login'
      }
    },
    methods: { // 需要执行的函数对象
      request () {
        console.log(this.mesg)
        this.axios.get('v1/order?receiver_contact=123').then(response => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
      },
      gotoRegister () {
        this.$router.push({path: '/register'})
      }
    },
    mounted: function () { // 这个是钩子函数 , vue生命周期中的钩子函数, 自执行
      console.log(this)
    }
  }
</script>

<style scoped>
  h1{
    color: red;
  }
</style>
