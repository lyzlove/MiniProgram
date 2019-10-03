// pages/home/home.js
import request from '../../utils/network.js'
Page({

  data: {
    msg: '这是首页的数据'
  },

  onLoad: function (options) {
    // this.getDataHttp();
    wx.showLoading({
      title: '加载中',
    })
    request({
      url: 'https://www.apiopen.top/satinGodApi?type=1&page=1',
    }).then( res => {
      console.log(res.data.data)
      wx.hideLoading({
        title: '加载中',
      })
    }).catch( err => {
      console.log(err)
    })

    // wx.request({
    //   // url: 'https://www.apiopen.top/satinGodApi?type=1&page=1',
    //   url: 'https://httpbin.org/post',
    //   method: 'post',
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
  },
  showToast: function(){
    // wx.showToast({
    //   title: '弹框提示',
    //   duration: 2000,
    //   icon: 'loading'
    // })
    wx.showModal({
      title: '弹框提示',
      content: 'loading',
      mask: true
    })
    // wx.showLoading({
    //   title: '加载中',
    // })

  },

  getDataHttp() {
    wx.request({
      url: 'https://www.apiopen.top/satinGodApi?type=1&page=1',
      // url: 'https://httpbin.org/post',
      method: 'post',
      success: function (res) {
        console.log(res)
      }
    })
  },
  onShareAppMessage: function(opions){
    return {
      title: '这是小程序分享测试',
      path: '/pages/home/home',
      imageUrl: '/assets/images/1.jpg'
    }
  },
  loginHandle: function(){
    wx.login({
      
    })
  },
  navigatorHandle: function(){
    wx.navigateTo({
      url: '/pages/detail/detail?title=Hello,MiniProgram',
    })
  }
})
