var api = require('../../utils/api')

Component({
  properties: {
    'sendValue':{
      type: String, //必填，目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: "" , 
      observer: function (newVal, oldVal) {
        this.setData({
          list: [],//电影列表
          start: 0
        })
      }
    }
  },
  data: {
    start: 0,
    list: [],
    showLoading: true,
    showMore: true
  },
  methods: {
    loadData(start) {
      console.log(this.properties.sendValue) 
      //http://t.yushu.im/v2/movie/in_theaters?start=0&count=20
      api.getList(this.properties.sendValue, start)
        .then(res => {
          console.log(11);
          console.log(res);
          console.log(res.subjects.length);
          if (res.subjects.length > 0) {
            this.setData({
              list: this.data.list.concat(res.subjects),//连接前面一页的数据
              showLoading: false,
              showMore: true,
              start: start + 1 //页数递增
            })
          } else {
            this.setData({
              showMore: false
            })
          }
        })
      console.log(this.data.list)
    },
    handleScrollToLower(e) {
      //如果没有更多的数据就不再加载
      if (!this.data.showMore) {
        return;
      }
      this.loadData(this.data.start);
    },
    handleRedirect(e) {
      var id = e.currentTarget.dataset.id;
      //页面跳转并传入当前id值
      wx.navigateTo({
        url: '../../pages/detail/detail?id=' + id,
      })
    },
    handleBuyTicket(e){
      console.log("点击了购票按钮");
    },
  }
})