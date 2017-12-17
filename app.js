// const wxlogin = require('./config').wxlogin
// const constants = require('./utils/constants')

var isLogin = false
App({
  globalData: {
    userInfo: {
      thirdSession: '',
      username: '',
      phone: '',
      gender: '',
      city: '',
      province: '',
      country: '',
      avatarUrl: ''
    },

    book: {}

  },



  //程序启动
  onLaunch: function () {

  }

});