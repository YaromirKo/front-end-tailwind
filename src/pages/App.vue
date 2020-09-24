<template>
  <div class="container mx-auto">
    <NavBar/>
    <ContentBody/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import ContentBody from "@/components/ContentBody";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {
    NavBar,
    ContentBody,
    Footer
  }
}
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #edf2f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 100vh;
  border: 3px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>
