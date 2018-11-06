<template>
    <div class="form-position">
      <h1 class="login-h1">登录</h1>
      <div class="login-form">
        <input type="text" name="username" placeholder="邮箱或手机账号" v-model="username" @keyup="testUsernameNumber(username)" class="username"/>
        <label class="username-label">请输入有效的手机号码或邮箱</label>
        <input type="password" name="password" placeholder="密码" v-model="password" @keyup="testPassword(password)" class="password"/>
        <label class="password-label">请输入正确的密码</label>
        <router-link to="/enroll" class="return">还没有账户？前往注册>></router-link>
        <input type="submit" name="submit" value="登录" @click="submitLoginData" class="submit"/>
      </div>
      <div class="other-pass">
        <span>其他登录方式</span>
        <ul>
          <li class="icon" id="icon1"></li>
          <li class="icon" id="icon2"></li>
          <li class="icon" id="icon3"></li>
        </ul>
      </div>
      <!--<div id="v_container" style="width: 200px;height: 50px;"></div>-->
    </div>

</template>

<script>
    import {testUsernameNumber} from "../assets/js/verification";
    import {testPassword} from "../assets/js/verification";
    import {submitFormData} from "../assets/js/postdata";
    // import {gVerify} from "../assets/js/verify";

    export default {
      name: "LoginForm",
      data() {
        return {
          username: "",
          password: ""
        }
      },
      methods: {
        testUsernameNumber:function (username) {
          testUsernameNumber(username);
        },
        testPassword:function (password) {
          testPassword(password);
        },
        // gVerify:function (options) {
        //   gVerify(options);
        // },
        submitLoginData:function () {
          let username = this.username;
          let password = this.password;
          const url = "";
          console.log(username,password);
          let postData = JSON.stringify({
            'username':username,
            'password':password
          })
          let postHeaders = {'Content-Type':'application/json;charset=UTF-8'};
          submitFormData(url,postHeaders,postData);
        }
      }
    }

    // let verifyCode = new gVerify("v_container");
</script>

<style scoped>
  @import "../assets/css/layout.css";
</style>
