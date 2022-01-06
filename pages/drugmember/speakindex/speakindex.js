// pages/drugmember/speakindex/speakindex.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 0,
        //开口说列表数据源
        list: [{
            "id": "3",
            "title": "青霉素的功效与作用",
            "isspeak": "N",
            "totalspeak": "12",
            "createddate": "2021-12-28 16:00:00",
          }, {
            "id": "2",
            "title": "益生菌的作用与功效",
            "isspeak": "Y",
            "totalspeak": "30",
            "createddate": "2021-12-20 8:00:00",
          }, {
            "id": "1",
            "title": "什么情况可以吃抗生素",
            "isspeak": "Y",
            "totalspeak": "25",
            "createddate": "2021-12-18 10:00:00",
          }], // 数据列表
        type: '', // 数据类型
        loading: true, // 显示等待框
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const _this = this;
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

    },
    switchSlider:function(e){
      this.setData({
        current:e.target.dataset.index
      })
    },

    //跳转至我要说
    WantGoToSpeak: function (event) {
        console.log(event.currentTarget.dataset.id)
        wx.navigateTo({
            url: '../speak/speak'　　//开口说页面
        })
    }
})