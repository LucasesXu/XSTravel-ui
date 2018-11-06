<template>
  <div class="form-position">
    <h1 class="enroll-h1">注册</h1>
    <div class="enroll-form">
      <input type="text" name="username" placeholder="手机号码" v-model="username" @keyup="testPhoneNumber(username)" class="username"/>
      <label class="username-label">请输入有效的手机号码</label>
      <input type="text" name="email" placeholder="邮箱" v-model="email" @keyup="testEnrollEmailNumber(email)" class="email"/>
      <label class="email-label">请输入有效的邮箱</label>
      <input type="password" name="password" placeholder="密码" v-model="password1" @keyup="testPassword(password1)" class="password"/>
      <label class="password-label">密码长度不可以大于30</label>
      <input type="password" name="password_again" placeholder="确认密码" v-model="password2" @keyup="testPasswordCompare(password1,password2)" class="password"/>
      <label class="password-again-label">请输入相同的密码</label>
      <router-link to="/login" class="return">已有账户？前往登陆>></router-link>
      <input type="submit" name="submit" value="注册" @click="submitEnrollData" class="submit"/>
    </div>
  </div>
</template>

<script>
    import {testPhoneNumber} from "../assets/js/verification";
    import {testEnrollEmailNumber} from "../assets/js/verification";
    import {testPassword} from "../assets/js/verification";
    import {testPasswordCompare} from "../assets/js/verification";
    import {submitFormData} from "../assets/js/postdata";

    export default {
      name: "EnrollForm",
      data() {
        return{
          username:"",
          email:"",
          password1:"",
          password2:""
        }
      },
      methods: {
        testPhoneNumber:function (username) {
          testPhoneNumber(username);
        },
        testEnrollEmailNumber:function (email) {
          testEnrollEmailNumber(email);
        },
        testPassword:function (password) {
          testPassword(password);
        },
        testPasswordCompare:function (password1,password2) {
          testPasswordCompare(password1,password2);
        },
        submitEnrollData:function () {
          let username = this.username;
          let email = this.email;
          let password1 = this.password1;
          let password2 = this.password2

          const url = "";
          console.log(username,email,password1,password2);
          let postData = JSON.stringify({
            'username':username,
            'email':email,
            'password1':password1,
            'password2':password2
          })
          let postHeaders = {'Content-Type':'application/json;charset=UTF-8'};
          submitFormData(url,postHeaders,postData);
        }
      }
    }
</script>

<style scoped>
  @import "../assets/css/layout.css";
</style>
