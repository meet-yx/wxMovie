// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    // imgUrls: [
    //   'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
    //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    // ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var arr = [];
    wx.request({
      url: "http://op.juhe.cn/onebox/movie/pmovie",
      data: {
        key: "de69c686e1b9224fffbacd4c589ca9b0",
        city: "成都"
      },
      success: function (res) {
         for(var i in res.data.result.data[0].data){
          arr.push({
            "pic_url": res.data.result.data[0].data[i].iconaddress
          })
         }
        //  console.log(arr)
          that.setData({
           banner:arr
        })
        // console.log(res)
      }
    })
    var filmarr=[];
    wx.request({
      url: "http://op.juhe.cn/onebox/movie/pmovie", 
      data:{
        key: "de69c686e1b9224fffbacd4c589ca9b0",
        city: "成都"
      },
      success:function(res){
        for (var i in res.data.result.data[0].data){
          filmarr.push({
            "filmTitle": res.data.result.data[0].data[i].tvTitle,
            "filmimg":res.data.result.data[0].data[i].iconaddress,
            "filmgrade": res.data.result.data[0].data[i].grade,
            "filmdirector": res.data.result.data[0].data[i].director.data[1].name,
            "filmstar":res.data.result.data[0].data[i].star.data[1].name,
            "filmDate":res.data.result.data[0].data[i].playDate.data2
          })
          // console.log(res)
          // console.log(res.data.result.data[0].data[i].grade)
          // console.log(res.data.result.data[0].data[i].grade,"评分")
          // console.log(res.data.result.data[0].data[i].director,"导演")
          // console.log(res.data.result.data[0].data[i].star.data.name[i],"主演")
        }
        that.setData({
            film:filmarr
        })
       
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})