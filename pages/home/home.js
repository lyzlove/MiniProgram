// pages/home/home.js
const app = getApp();
console.log(app.globalData.name)
Page({
  data: {
    msg: "Hello World",
    data: "数据绑定",
    count: 0 ,
    lists: [
      { id: 1, name: 'zs', sex: 'male' },
      { id: 2, name: 'ls', sex: 'female' },
      { id: 3, name: 'ww', sex: 'male' },
    ]
  },
  handleGetUserInfo(e){
    console.log(e)
  },
  handleCounterAdd(){
    console.log()
    // 错误的做法
    // this.data.count++
    // console.log(this.data.count)
    if (this.data.count >= 10){
      this.setData({
        count: 10
      })
      
    }else{
      this.setData({
        count: this.data.count + 1
      })
    }
  },
  handleCounterMinus(){
    if (this.data.count <= 0){
      this.setData({
        count: 0
      })
    }else{
      this.setData({
        count: this.data.count - 1
      })
    }
  }
})
// 命令式编程
// 声明式编程