<template>
<div class="h-screen" >
<div class="">
<Header/>
</div>
<main>
<div>
   <!-- <Sidebar/>  -->
</div>
<div>
    <!-- <router-link :to="{name:'Home'}">Home</router-link>
    <router-link :to="{name:'Dashboard'}">Dashboard</router-link> -->
</div>
<div class="bg-[#E0E7FF]">
    <router-view/>
</div>
</main>
</div>
</template>
<script>
import Header from '../header/Header.vue';
// import Sidebar from '../sidebar/Sidebar.vue';
export default {
    name:"LayOut",
    components:{
Header,
    },
}
</script>
<style scoped>
.layout{
    display: flex;
    flex-direction: column;
}
</style>