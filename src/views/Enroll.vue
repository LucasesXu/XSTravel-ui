<template>
    <div class="position">
      <EnrollForm></EnrollForm>
      <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "../components/Footer"
    import EnrollForm from "../components/EnrollForm"
    export default {
        name: "Enroll",
        components: {
          Footer,
          EnrollForm
        }
    }
</script>

<style scoped>
  @import "../assets/css/layout.css";
</style>
