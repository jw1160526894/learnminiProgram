// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"秀莹",
    students:[
      {
        id: 110,
        name: 'cobe',
        age: 18
      }, {
        id: 111,
        name: 'yaoming',
        age: 18
      }, {
        id: 112,
        name: 'james',
        age: 38
      }
      ],
      counter:0
  },
  increment:function(){
    //小程序直接修改数据不会影响视图，需要通过setData来设置
    // this.data.counter++;
    // console.log(this.data.counter)
  
    this.setData({
      counter:this.data.counter+1
    })
  },
  decrement:function(){
    this.setData({
      counter:this.data.counter-1
    })
  }
,
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

  }
})