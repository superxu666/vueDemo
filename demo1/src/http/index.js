import axios from 'axios'

axios.defaults.timeout = 5000                                  // 响应时间
axios.defaults.baseURL = 'http://expressking.leanapp.cn/api/' // 配置接口地址
// 添加请求拦截器, 准备请求之前需要做的事情可以放到下面函数中
axios.interceptors.request.use(config => {
  console.log('发送请求前...')
  return config
})

// 添加响应拦截器, 服务器响应后需要根据返回数据进行状态判断
axios.interceptors.response.use(res => {
  console.log('返回数据后...')
  return res
})

export default axios
