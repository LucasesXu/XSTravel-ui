<template>
    <div class="position">
      <LoginForm></LoginForm>
      <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "../components/Footer"
    import LoginForm from "../components/LoginForm"
    export default {
        name: "Login",
        components: {
          LoginForm,
          Footer
        }
    }
</script>

<style scoped>
  @import "../assets/css/layout.css";
</style>
