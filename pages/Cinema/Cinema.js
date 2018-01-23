var QQMapWx=require('../../js/qqmap-wx-jssdk.js')
var qqmapsdk;
// pages/Cinema/Cinema.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
   var that=this;
   var arr = [];
  //  定位用户当前位置
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
      },
    })
  qqmapsdk=new QQMapWx({
    key:'U3KBZ-ORX6X-4HG4C-ZU6TK-B5GHH-XHFQC',
  });

  wx.request({
    url: "http://op.juhe.cn/onebox/movie/pmovie",
    data: {
      key: "de69c686e1b9224fffbacd4c589ca9b0",
      city: "成都"
      
    },
    success: function (res) {
      for (var i in res.data.result.data[0].data) {
        arr.push({
          "pic_url": res.data.result.data[0].data[i].iconaddress
        })
      }
      //  console.log(arr,"我是图片")
      that.setData({
        banner: arr
      })
      // console.log(res)
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
    var that=this;
    var Cinema=[];
    //调用地图接口
    qqmapsdk.search({
      keyword: "电影院",
      success: function (res) {
        for(var i in res.data){
         Cinema.push({
           "Ctitle": res.data[i].title,
           "Caddress": res.data[i].address,
           "Category": res.data[i].category
         })
        //  console.log(res.data[i].title)
        }
        that.setData({
          Clocation: Cinema
        })
      },
      fail: function (res) {
        console.log(res)
      },
      complate: function (res) {
        console.log(res);
      }
    });
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