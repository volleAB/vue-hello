const state = {
  count: 0, //计数
  movieName: '',  //电影名
  cinemaName: '', //电影院名
  token: window.sessionStorage.getItem('token'),
  username: '', //用户名
  loginState: false,  //登录状态
  messageGol: '',
  bannerList: [], //头部滚动
  hotList: [],  //热映电影
  city: '武汉'  //当前城市
}

export default state;
