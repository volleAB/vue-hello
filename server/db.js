const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vue-maizuo');

let db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', function(){
  console.log('数据库连接出错！');
});
db.on('open', function(){
  console.log('数据库连接成功！');
});

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  token: String,
  create_time: Date,
  like_movie: String
});

const User = mongoose.model('User', userSchema)

module.exports = User;
