import Api from '@/Services/Api'

export default {
  /**
   * Login service
   * @param params
   * @returns {*}
   */
  userLogin (params) {
    return Api().post('/platform/api/login', params)
  },
  /**
   * Adds new user
   * @param params
   * @returns {*}
   */
  addUser (params) {
    return Api().post('/platform/api/register', params)
  }
}
