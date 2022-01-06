// pages/drugmember/myscore/myscore.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //积分明细数据源
        list: [{
            "id": "4",
            "transtype": "收入",
            "transsource": "小票",
            "score": "30",
            "description": "上传小票，收入30积分",
            "createddate": "2021-12-28 11:00:00",
          }, {
            "id": "3",
            "transtype": "收入",
            "transsource": "登录",
            "score": "5",
            "description": "每日登录，收入5积分",
            "createddate": "2021-12-27 08:05:00",
          }, {
            "id": "2",
            "transtype": "支出",
            "transsource": "商品兑换",
            "score": "-100",
            "description": "商品兑换，移动充值卡100元，消耗100积分",
            "createddate": "2021-12-15 22:05:00",
          }, {
            "id": "1",
            "transtype": "收入",
            "transsource": "新用户注册",
            "score": "200",
            "description": "新用户注册，收入200积分",
            "createddate": "2021-12-07 10:00:00",
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

    }
})