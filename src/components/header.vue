<template>
    <div class="flex justify-between bg-transparent z-10 relative">
        <div class="flex items-center px-4 hover:text-primary hover:cursor-pointer" id="menuToggle">
            <svg width="24" height="24">
                <use xlink:href="src/assets/svg/icon-sprite.svg#sidebar"></use>
            </svg>
        </div>

        <div class="flex flex-wrap justify-start items-center pr-4 py-2">
            <img src="@/assets/images/profile/profile.png" alt="Profile" class="rounded-lg" id="img-profile">
            <div class="hidden bg-white p-2 absolute right-4 top-full rounded-md shadow-md sm:block sm:static sm:bg-transparent sm:shadow-none sm:rounded-none sm:ml-2" id="profile">
                <span class="text-dark text-sm">James Silaban</span>
                <p class="text-secondary text-xs self-start ">Admin</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMenuStore } from '@/stores/menu';

const menu = useMenuStore()

onMounted(()=>{
    const img_profile= document.querySelector("#img-profile")
    const profile = document.querySelector('#profile')
    
    img_profile.addEventListener('mouseover', ()=>{
        profile.classList.remove('hidden')
    })

    img_profile.addEventListener('mouseout', ()=>{
        profile.classList.add('hidden')
    })

    menu.menuToggle = document.querySelector('#menuToggle')
    menu.menuToggle.addEventListener('click', ()=>{
        menu.sidebar.classList.remove('-translate-x-full')
    })
})

</script>