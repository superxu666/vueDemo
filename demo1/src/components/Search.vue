<template>
  <div>
    <label>
      {{tel}}<input type="text" v-model="telNumb">
    </label>
    <button type="button" @click="searchClick">{{btnname}}</button>
    <ul>
      <li v-for="item in items">{{item.objectId}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
        tel: '手机号 ',
        btnname: '查询',
        telNumb: '',
        items: null
      }
    },
    methods: {
      searchClick: function () {
        this.axios.get('v1/order?' + `${this.telNumb}`).then(res => {
          console.log(res)
          // let len = res.data.results.results.length
          let resArr = res.data.results.results
          if (!resArr) return
          // for (var i = 0; i < len; i++) {
          //   items.push(resArr[i])
          // }
          this.items = resArr
        })
      }
    }
  }
</script>

<style scoped>
  li{
    list-style: none;
    width: 300px;
    height: 20px;
    margin: 20px auto;
    background: red;
    transition: all .25s ease-in;
  }
  li:hover{
    transition: all .25s ease-in;
    width: 350px;
    height: 35px;
  }
</style>
