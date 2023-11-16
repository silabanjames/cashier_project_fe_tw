<template>
    <div id="outer-modal" class="fixed bg-gray-400 bg-opacity-75 top-0 right-0 z-30 h-[100vh] w-full">
        <!-- <div class="w-full  border-4"> -->
            <div class="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-3xl w-11/12">
                <div class="bg-slate-100 bg-opacity-100 rounded-lg shadow-md flex flex-col justify-center items-center sm:py-10 md:py-20">
                    <div class="max-w-[200px] w-full aspect-square flex items-center px-4 sm:px-0">
                        <img src="@/assets/images/product/beng-beng-no-bg.png" alt="" class="w-full">
                    </div>
                    <h2 class="text-xl text-dark font-semibold">Beng Beng</h2>
                    <h3 class="text-lg text-secondary font-light">Rp. 10000,-</h3>
                    <h3 class="text-sm mb-5">Stok: 5</h3>
                    <div class="mb-5 flex justify-center">
                        <button class="bg-primary text-white px-3 rounded-md">-</button>
                        <input type="text" class="w-1/4 mx-4 text-center bg-transparent border-2 focus:outline-none border-primary">
                        <button class="bg-primary text-white px-3 rounded-md">+</button>
                    </div>
                    <div class="mb-10 sm:mb-0 flex flex-col justify-center items-center mx-5 sm:flex-row">
                        <button class="bg-red-600 text-white px-3 py-2 rounded-md mb-1 sm:mr-4 sm:mb-0" @click="closeModal">Batal</button>
                        <button class="bg-sky-600 text-white px-3 py-2 rounded-md">Tambah ke keranjang</button>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const emits = defineEmits(['close'])

const closeModal = () => {
    emits('close')
}

onMounted(()=>{
    const outerModal = document.querySelector('#outer-modal')

    window.onclick = function(event) {
        if (event.target == outerModal) {
            closeModal()
        }
    }
})


</script>