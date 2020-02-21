// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score:50,
    myDatas:[
      ["阿里","马云","哈哈"]
    ]
  },
  incrementCount(){
    console.log(this.data.score)
    this.setData({
      score:this.data.score+9
    })
  }
})