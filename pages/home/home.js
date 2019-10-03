// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  chooseImage: function(){
    var _self = this;
    wx.chooseImage({
      success: function(res) {
        console.log(res)
        _self.setData({
          images: res.tempFilePaths
        })
      },
    })
  },
  imgLoader: function(){
    console.log('图片加载')
  },
  dataHandle: function(e){
    console.log(e.target.dataset.name)
  },
  captureHandle: function(){
    console.log('捕获')
  },
  
})