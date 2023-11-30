<template>
    <div id="outer-modal" class="fixed bg-gray-400 bg-opacity-75 top-0 right-0 z-30 h-[100vh] w-full">
        <!-- <div class="w-full  border-4"> -->
            <div class="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-3xl w-11/12">
                <div class="bg-slate-100 bg-opacity-100 rounded-lg shadow-md flex flex-col justify-center items-center sm:py-10 md:py-20 pt-5">
                    <div class="max-w-[200px] w-full aspect-square flex items-center px-4 sm:px-0">
                        <img :src='`http://${props.item.image}`'  alt="" class="w-full object-contain h-full">
                    </div>
                    <h2 class="text-xl text-dark font-semibold">{{ props.item.title }}</h2>
                    <h3 class="text-lg text-secondary font-light">Rp. {{ props.item.price }},-</h3>
                    <h3 class="text-sm mb-5">Stok: {{ props.item.stock }}</h3>
                    <div class="mb-5 flex justify-center">
                        <button class="bg-primary text-white px-3 rounded-md" @click="products.decreaseQuantity">-</button>
                        <input type="text" class="w-1/4 mx-4 text-center bg-transparent border-2 focus:outline-none border-primary" v-model="products.quantity">
                        <button class="bg-primary text-white px-3 rounded-md" @click="products.increaseQuantity">+</button>
                    </div>
                    <div class="mb-10 sm:mb-0 flex flex-col justify-center items-center mx-5 sm:flex-row">
                        <button class="bg-red-600 text-white px-3 py-2 rounded-md mb-1 sm:mr-4 sm:mb-0" @click="closeModal">Batal</button>
                        <button class="bg-sky-600 text-white px-3 py-2 rounded-md" @click="products.addToCart(props.item.id, closeModal)">Tambah ke keranjang</button>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useProductStore } from '../../stores/product';

const products = useProductStore()

const props = defineProps({
    item: {
        type: Object
    }
})

const emits = defineEmits(['close'])

const closeModal = () => {
    products.quantity = 0
    emits('close')
}

watch(()=>products.quantity, (newCount, oldCound) => {
    if(newCount < 0){
        products.quantity = 0
    }
    if(newCount > props.item.stock){
        products.quantity = props.item.stock
    }
})

onMounted(()=>{
    const outerModal = document.querySelector('#outer-modal')

    window.onclick = function(event) {
        if (event.target == outerModal) {
            closeModal()
        }
    }
})


</script>