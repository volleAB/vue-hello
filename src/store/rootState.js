const state = {
  count: 0,
  show: false,
  movieName: '',
  cinemaName: '',
  token: window.sessionStorage.getItem('token'),
  username: '',
  loginState: false,
  messageGol: ''
}

export default state;
