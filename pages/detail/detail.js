var api = require('../../utils/api');
Page({
  data: {
    detailList:{}
  },
  onLoad: function (options) {
    var id = options.id;//获取传递过来的参数
    api.getDetail(id)
      .then(res=>{
        console.log(res)
        this.setData({
          detailList:res
        })
      })

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  }
})		