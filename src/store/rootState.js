const state = {
  count: 0, //计数
  token: window.sessionStorage.getItem('token'),
  // token: 'window.sessionStorage.getItem',
  username: '', //用户名
  filmIndex: Number,
  bannerList: [], //头部滚动
  hotList: [],  //热映电影
  city: '武汉',  //当前城市
  canNavBar: true,  //底部栏是否显示
  cinema: {},  //电影院数据
  cookieUserName: ''  //测试cookie
}

export default state;
