//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      {link:'',
      url:'https://github.com/BuranEric/Encyclopedia_Mini_Program/blob/test/images/bg1.png',
      },
      {link:'',
      url:'/images/bg2.png',
      },
      {link:'',
      url:'/images/bg3.png',
      },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    ausrc0:"http://119.23.182.180/hexie/au/1.wav",
    

    motto: 'Hello World',
  },
 
  
  onShareAppMessage: function () {
 
    return {
 
      title: '百科知识我在行',
 
      desc: '一款以百科答题以及竞赛等方式激励中小学生主动学习百科知识的微信小程序',
 
      path: '/pages/home/index'
 
    }
 
  }
})
