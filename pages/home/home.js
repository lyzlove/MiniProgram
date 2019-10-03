// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['流行', '最新', 'TOP500','推荐'],
    index: 0
  },
  clickItem: function(e){
    console.log(e)
  }
})