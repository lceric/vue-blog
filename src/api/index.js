import axios from 'axios'
import Vue from 'vue'
const vm = new Vue()
// const IMG_SOURCE_SERVER = 'http://118.24.53.34:8888/upload/upload.php'
const IMG_SOURCE_SERVER = '/upload/upload.php'
// const IMG_SOURCE_SERVER = 'http://localhost:80/upload/upload.php'
const instance = axios.create({
  // baseURL: 'http://localhost:80/api'
  baseURL: '/api'
  // headers: {
  //   'USERID': 'b91aacd034c311e7bec600163e055a18'
  //   // 'Content-Type': 'application/json;charset=utf-8',
  //   // 'Content-Type': 'application/json;charset=utf-8;'
  // }
})
instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  vm.$Message.warning(error.response.data.message)
  return Promise.reject(error)
})

// export default instance
// 分页条件查询文章
export function getArticleByPage (params) {
  return instance.get('/article/page', {
    params: {
      ...params
    }
  })
}
// 通过id获取文章
export function getArticleById (id) {
  return instance.get(`/article/${id}`)
}
// 获取code
export function getType (type) {
  return instance.get(`/code/type/${type}`)
}
// 新增文章
export function insertArticle (params) {
  return instance.post(`/article/`, params)
}
// 获取个人信息
export function getMineInfo () {
  return axios.get('static/json/data.json')
}
// 上传图片
export function uploadImg (params) {
  return axios.post(IMG_SOURCE_SERVER, params)
}
// 登录
export function login (params = {}) {
  return instance.post(`/user/login`, {
    type: 'login',
    ...params
  })
}
