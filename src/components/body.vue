<template>
<div class="">
    <Header></Header>
</div>
<div class="">
    <div>
        <Sidebar></Sidebar>
    </div>
    <div class="md:pl-[90px]">
        <RouterView />
    </div>
    
    <!-- <div class="fixed right-4 bottom-4 bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-10 md:w-14 md:h-14 hover:bg-primary hover:text-white hover:cursor-pointer"> -->
        <!-- <RouterLink> -->
            <!-- <svg width="30" height="30" class="">
                <use xlink:href="src/assets/svg/icon-sprite.svg#cart"></use>
            </svg> -->
        <!-- </RouterLink> -->
    <!-- </div> -->
</div>
</template>

<script setup>
import Header from './header.vue'
import Sidebar from './sidebar.vue'
// import { RouterLink } from 'vue-router';

</script>