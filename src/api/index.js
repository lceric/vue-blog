import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://118.24.53.34:8888/api'
  // headers: {
  //   'USERID': 'b91aacd034c311e7bec600163e055a18'
  //   // 'Content-Type': 'application/json;charset=utf-8',
  //   // 'Content-Type': 'application/json;charset=utf-8;'
  // }
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
// 获取个人信息
export function getMineInfo () {
  return axios.get('static/json/data.json')
}
