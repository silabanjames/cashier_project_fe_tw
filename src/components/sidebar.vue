<template>
  <nav class="flex flex-col justify-between items-center h-full bg-white rounded-r-3xl fixed z-20 top-0 left-0 transition duration-500 md:translate-x-0 -translate-x-full">
    <div class="flex flex-col">
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center px-7 py-8 bg-transparent">
          <!-- Logo -->
          <div class="">
            <img src="@/assets/svg/miyamizu.svg" alt="Logo">
          </div>

          <!-- Back -->
          <div class="ml-4 md:hidden hover:text-primary hover:cursor-pointer" id="hide-nav" >
            <svg width="30" height="30">
              <use xlink:href="src/assets/svg/icon-sprite.svg#back"></use>
            </svg>
          </div>
        </div>
        
        <div class="flex flex-col">
          <div class="px-3 my-1" v-for="menuItem in menu.data">
            <template v-if="!menuItem.admin || (menuItem.admin && auth.user.role.toLowerCase() === 'admin')">
              <RouterLink :to="menuItem.path">
                <div class="px-4 py-4 rounded-lg hover:bg-primary hover:text-white" @click="menu.setNavActive(menuItem)" :class="{'menu-active': menuItem.active}">
                  <!-- <img :src="`src/assets/icons/${menuItem.icon}`" :alt="menuItem.title"> -->
                  <svg width="30" height="30">
                    <use :xlink:href="`src/assets/svg/icon-sprite.svg#${menuItem.iconf}`"></use>
                  </svg>
                </div>
              </RouterLink>
            </template>
          </div>
        </div>
      </div>
    </div>
      
      <!-- Logout -->
    <div class="px-3 my-4">
      <RouterLink :to="{name: 'Login'}">
        <div class="px-4 py-4 rounded-lg hover:bg-primary hover:text-white" @click="auth.handleLogout">
          <svg width="30" height="30">
            <use xlink:href="src/assets/svg/icon-sprite.svg#log-out"></use>
          </svg>
        </div>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth'
import { useMenuStore } from '@/stores/menu';
import { RouterLink } from 'vue-router';

const auth = useAuthStore()
const menu = useMenuStore()

onMounted(()=>{
  menu.backToggle = document.querySelector('#hide-nav')
  menu.sidebar = document.querySelector('nav')

  menu.backToggle.addEventListener('click', ()=>{
    menu.sidebar.classList.add('-translate-x-full')
  })
})
</script>