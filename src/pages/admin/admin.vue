<template>
    <div class="w-full mb-6 px-4 text-2xl font-bold">
        <h1>Halaman <span class="font-normal">Admin</span></h1>
    </div>
    <div class="px-8">
        <div class="flex flex-col items-center mb-8 md:flex-row md:justify-evenly">
            <div class="bg-gradient-to-r from-primary to-green-400 text-white px-10 py-8 mb-6 w-2/3 rounded-lg shadow-md md:mb-0 md:max-w-md md:w-full md:mr-6">
                <h2 class="text-base font-semibold">Total Produk</h2>
                <h1 class="text-3xl text-right font-bold mt-14">159</h1>
            </div>
            <div class="bg-gradient-to-r from-primary to-green-400 text-white px-10 py-8 w-2/3 rounded-lg shadow-md md:max-w-md md:w-full">
                <h2 class="text-base font-semibold">Total Pendapatan</h2>
                <h1 class="text-2xl text-right font-bold mt-14">Rp. 1000000</h1>
            </div>
        </div>

        <table class="table-fixed w-full mb-16">
            <thead class="text-left">
                <tr class="border-slate-200 border-b-2">
                    <th class="font-normal w-1/6">ID</th>
                    <th class="font-normal">Product</th>
                    <th class="font-normal w-1/6">Harga</th>
                    <th class="font-normal w-1/6">Stok</th>
                    <th class="font-normal text-center w-1/6 ">Tambahan</th>
                </tr>
            </thead>
            <tbody>
                <!-- Item start -->
                <tr class="border-slate-200 border-b-2">
                    <td>199924</td>
                    <td class="flex flex-col items-center py-2 pr-4 sm:flex-row lg:pr-10">
                        <div class="max-w-[150px] w-full aspect-square flex items-center">
                            <img src="@/assets/images/product/beng-beng-no-bg.png" alt="Product" class="w-full">
                        </div>
                        <h2 class="text-center text-sm font-semibold sm:text-left sm:ml-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, temporibus!</h2>
                    </td>
                    <td class="text-xs text-left text-secondary pr-2 sm:text-sm md:text-base">Rp. 10000,-</td>
                    <td class="text-xs text-left text-secondary pr-2 sm:text-sm md:text-base">193</td>
                    <td class="text-center px-2">
                        <button class="hover:text-green-600">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#edit"></use>
                            </svg>
                        </button>
                        <button class="hover:text-sky-600">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#info"></use>
                            </svg>
                        </button>
                        <button class="hover:text-red-600">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#delete"></use>
                            </svg>
                        </button>
                    </td>
                </tr>
                <!-- Item end -->
                <!-- Item start -->
                <tr class="border-slate-200 border-b-2">
                    <td>199924</td>
                    <td class="flex flex-col items-center py-2 pr-4 sm:flex-row lg:pr-10">
                        <div class="max-w-[150px] w-full aspect-square flex items-center">
                            <img src="@/assets/images/product/beng-beng-no-bg.png" alt="Product" class="w-full">
                        </div>
                        <h2 class="text-center text-sm font-semibold sm:text-left sm:ml-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, temporibus!</h2>
                    </td>
                    <td class="text-xs text-left text-secondary pr-2 sm:text-sm md:text-base">Rp. 10000,-</td>
                    <td class="text-xs text-left text-secondary pr-2 sm:text-sm md:text-base">193</td>
                    <td class="text-center px-2">
                        <button class="hover:text-green-600">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#edit"></use>
                            </svg>
                        </button>
                        <button class="hover:text-sky-600">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#info"></use>
                            </svg>
                        </button>
                        <button class="hover:text-red-600">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#delete"></use>
                            </svg>
                        </button>
                    </td>
                </tr>
                <!-- Item end -->
                <!-- Item start -->
                <tr class="border-slate-200 border-b-2">
                    <td>199924</td>
                    <td class="flex flex-col items-center py-2 pr-4 sm:flex-row lg:pr-10">
                        <div class="max-w-[150px] w-full aspect-square flex items-center">
                            <img src="@/assets/images/product/beng-beng-no-bg.png" alt="Product" class="w-full">
                        </div>
                        <h2 class="text-center text-sm font-semibold sm:text-left sm:ml-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, temporibus!</h2>
                    </td>
                    <td class="text-xs text-left text-secondary pr-2 sm:text-sm md:text-base">Rp. 10000,-</td>
                    <td class="text-xs text-left text-secondary pr-2 sm:text-sm md:text-base">193</td>
                    <td class="text-center px-2">
                        <button class="hover:text-green-600">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#edit"></use>
                            </svg>
                        </button>
                        <button class="hover:text-sky-600">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#info"></use>
                            </svg>
                        </button>
                        <button class="hover:text-red-600">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#delete"></use>
                            </svg>
                        </button>
                    </td>
                </tr>
                <!-- Item end -->
                <!-- Item start -->
                <tr class="border-slate-200 border-b-2">
                    <td>199924</td>
                    <td class="flex flex-col items-center py-2 pr-4 sm:flex-row lg:pr-10">
                        <div class="max-w-[150px] w-full aspect-square flex items-center">
                            <img src="@/assets/images/product/beng-beng-no-bg.png" alt="Product" class="w-full">
                        </div>
                        <h2 class="text-center text-sm font-semibold sm:text-left sm:ml-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, temporibus!</h2>
                    </td>
                    <td class="text-xs text-left text-secondary pr-2 sm:text-sm md:text-base">Rp. 10000,-</td>
                    <td class="text-xs text-left text-secondary pr-2 sm:text-sm md:text-base">193</td>
                    <td class="text-center px-2">
                        <button class="hover:text-green-600">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#edit"></use>
                            </svg>
                        </button>
                        <button class="hover:text-sky-600">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#info"></use>
                            </svg>
                        </button>
                        <button class="hover:text-red-600">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#delete"></use>
                            </svg>
                        </button>
                    </td>
                </tr>
                <!-- Item end -->
                
            </tbody>
        </table>
    </div>
</template>