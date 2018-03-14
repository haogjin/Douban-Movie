var API_URL = 'http://t.yushu.im/v2/movie';

function fetchApi(type,params){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `${API_URL}/${type}`, //模板字符串
      data: params,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: resolve,
      fail: reject
    })
  })
}

//http://t.yushu.im//v2/movie/in_theaters?start=0&count=20
module.exports = {
  //获取电影列表
  getList(type,start=0,count=20){
    return fetchApi(type, {"start": start*count,"count":count})
      .then(res=>res.data)
  },
  //获取电影详情
  getDetail(id){
    return fetchApi("/subject/"+id)
      .then(res=>res.data)
  }
}