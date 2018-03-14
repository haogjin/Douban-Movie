var api = require('../../utils/api')

Page({
  data: {
    homeSelected:true,
    comingSelected:false,
    movieType:''
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '来自豆瓣电影',
      path: '/pages/index/index',
      success: function (res) {
        console.log('转发成功')
      },
      fail: function (res) {
        console.log('转发失败')
      }
    }
  },
  handleHomeSelected(e){
    this.setData({
      homeSelected: true,
      comingSelected: false,
      movieType: 'in_theaters'
    })
    //调用movieList子组件的方法
    this.movieList = this.selectComponent("#movieList");
    this.movieList.loadData(0);
  },
  handleComingSelected(e) {
    this.setData({
      homeSelected: false,
      comingSelected: true,
      movieType: 'coming_soon'
    })
    this.movieList = this.selectComponent("#movieComingList");
    this.movieList.loadData(0);
  },
 
  onLoad: function (options) {
   
  },
  onReady: function () {
    this.handleHomeSelected();
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