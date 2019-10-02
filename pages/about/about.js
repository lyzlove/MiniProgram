// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: [],
    pageCount: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('onLoad');
    var _self = this;
    wx.request({
      url: 'https://www.apiopen.top/satinApi?type=1&page=1',
      success: function(res) {
        console.log(res.data.data);

        _self.setData({
          news: res.data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('onShow')

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('onHide')

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('onUnload')

  },
  changeData: function() {
    this.setData({
      pageCount: this.data.pageCount + 1
    })
    var _self = this;
    wx.request({
      url: 'https://www.apiopen.top/satinApi?type=1&page=' + _self.data.pageCount,
      success: function(res){
        console.log(res.data.data);

        _self.setData({
          news: res.data.data
        })
      }
    })
  },
  onPageScroll(obj){
    console.log(obj)
  },
  onReachBottom(){
    console.log('滚动到底部了！')

  }
})