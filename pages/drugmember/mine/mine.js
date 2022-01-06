// pages/drugmember/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
    
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //动态设置NavigationBarColor
        wx.setNavigationBarColor({
            frontColor: '#000000', // 必写项
            backgroundColor: '#23EBB9', // 必写项
            // animation: { // 可选项
            //     duration: 400,
            //     timingFunc: 'easeIn'
            // }
        })
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

    GoToMemberInfo:function(){
        wx.navigateTo({
            url: '../memberinfo/memberinfo'　　//用户信息维护页面
        })
    },

    GoToMyScore:function(){
        wx.navigateTo({
            url: '../myscore/myscore'　　//积分明细页面
        })
    },
})