// pages/drugmember/scoremall/scoremall.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //积分商城数据源
        list: [{
            "id": "1",
            "name": "手机充值卡50",
            "description": "手机充值卡50元",
            "score": "500",
            "image": "https://img.alicdn.com/bao/uploaded/i3/T1Vv8tXodjXXagFrIU_014024.jpg_500x500q90.jpg",
          }, {
            "id": "2",
            "name": "手机充值卡100",
            "description": "手机充值卡100元",
            "score": "1000",
            "image": "https://exp-picture.cdn.bcebos.com/2db6c1b2dc19ce2c987fdc6a7fdca039121f11f9.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_jpg%2Fquality%2Cq_80",
          }, {
            "id": "3",
            "name": "手机充值卡200",
            "description": "手机充值卡200元",
            "score": "2000",
            "image": "https://img2.baidu.com/it/u=2185100715,3427960357&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
          }, {
            "id": "4",
            "name": "手机充值卡300",
            "description": "手机充值卡300元",
            "score": "3000",
            "image": "https://img1.baidu.com/it/u=1450667353,115509498&fm=224&fmt=auto&gp=0.jpg",
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

    viewGoodsDetail: function(id){

    },

    exchangeGoods: function(id){

    }

})