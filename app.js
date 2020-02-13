App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
   // console.log(options)
   console.log('小程序初始化完成');

   //获取用户信息， 已废弃
   wx.getUserInfo({
     success:function(res){
       console.log(res)
     },
     fail:function(res){
       console.log(res)
     }
   })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log(options);
    console.log('页面显示')
    switch(options.scene){
      case 1005:
      console.log('通过顶部搜索框的搜索结果页进入')
      break;
      
      default:
      console.log('其它');
      break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('切后台时调用')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData:'this is globalData'
})
