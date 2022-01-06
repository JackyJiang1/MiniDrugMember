// pages/drugmember/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banner:[
          'cloud://dh-1-5g88u11u7620e908.6468-dh-1-5g88u11u7620e908-1309121922/image/images/lunbo1.jpeg','cloud://dh-1-5g88u11u7620e908.6468-dh-1-5g88u11u7620e908-1309121922/image/images/lunbo2.jpeg','cloud://dh-1-5g88u11u7620e908.6468-dh-1-5g88u11u7620e908-1309121922/image/images/lunbo3.jpeg'
        ],

        //最新资讯数据源
        title: '加载中...', // 状态
        list: [{
            "category": "资讯",
            "title": "优甲乐，你吃对了吗？",
            "image": "https://img2.baidu.com/it/u=3014163951,554298089&fm=26&fmt=auto"
          }, {
            "category": "资讯",
            "title": "吃钙片有讲究，你应该知道的补钙小知识",
            "image": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fimages01%2F20210414%2F4ecc7938814c4437b7b6624cc0dcf516.jpeg&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642666809&t=89c371197775476a8eac797fb8792960"
          }, {
            "category": "资讯",
            "title": "服用哪些药物不宜多喝水？",
            "image": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0709%252F27dc64bcj00qvy8oh000pc000hs00b4g.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642666806&t=f3a7e63993389a1d02ac515c7609f0e9"
        }], // 数据列表
        type: '', // 数据类型
        loading: true // 显示等待框
    },
    
    // 查询搜索的接口方法
    a: function () {
    
    },

    //跳转至开口说
    GoToSpeak: function () {
      wx.navigateTo({
        url: '../speakindex/speakindex'　　//开口说页面
      })
    },

    //跳转至问卷调查
    GoToQuestion: function () {
      wx.navigateTo({
        url: '../question/question'　　//问卷调查页面
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      const _this = this;
      // // 拼接请求url
      // const url = 'https://api.douban.com/v2/movie/' + options.type;
      // // 请求数据
      // wx.request({
      //   url: url,
      //   data: {},
      //   header: {
      //     'content-type': 'json' // 默认值
      //   },
      //   success: function(res) {
      //     console.log(res.data);
      //     // 赋值
      //     _this.setData({
      //       title: res.data.title,
      //       list: res.data.subjects,
      //       type: options.type,
      //       loading: false // 关闭等待框
      //     })
      //   }
      // })

      //假装赋值
           _this.setData({
          //   title: '',
          //   list: list.infolist,
          //   type: options.type,
             loading: false // 关闭等待框
           })
          console.log(_this.data.list);
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