// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: [],
      observer: function(newVal, oldVal){
        console.log(newVal, oldVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeIndex:function(e){
      var index = e.target.dataset.index
      this.setData({
        currentIndex: index
      })
      
      this.triggerEvent('itemClick', { index: index, title: this.properties.titles[index]},{})
    }
  }
})
