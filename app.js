//app.js
App({
  //生命周期函数--初始化--初始化完成时触发
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    //配置转发功能
    // wx.showShareMenu({
    //   withShareTicket: true
    // })
    //小程序在群里被打开后，获取情景值和shareTicket
    // if (ops.scene == 1044) {
    //   console.log(ops.shareTicket)
    // }
  },
  //生命周期函数--显示--小程序启动时 或者 从后台进入前台时触发
  onShow(){
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  // //生命周期函数--隐藏--从前台进入后台时触发
  // onHide(){

  // },
  getUserName(){
    return "亿珍"
  },
  globalData: {
    userInfo: null,
    time:"2018/02/26"
  }
})