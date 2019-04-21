# hellovue

> A Vue.js project

## Start Project

``` bash

# start server
npm run server

# serve with hot reload at localhost:8080
npm run dev

# server

服务是用koa2+MongoDB搭建的，使用Mongoose连接数据库，实现数据的增删改查。
有用户注册登陆的功能，购买退订电影票的功能，添加标签等

# other
使用Vue2搭建，没有用其他的UI库，本来想用Element的，但是忘记了0.0
整个搭建用的是Vue-cli,粗略的使用了Vuex、Vue Router、scss、axios


```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Version 1.0

![image](./v1.gif)

## Version 2.0

![image](./v2.gif)

卖座网的接口不能直接使用了，一些数据都是用的本地的，但是用户的服务是要在本地自己开启一下的。

## Thanks

Some part of it is to learn from them

[vue-login](https://github.com/stzhongjie/vue-login)
[vue-demo-maizuo](https://github.com/ChuckCZC/vue-demo-maizuo)
