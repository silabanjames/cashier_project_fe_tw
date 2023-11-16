<template>
  <section id="login">
    <div class="container">
      <div class="flex justify-center px-2 min-h-[100vh] items-center">
        <form action="" class="bg-slate-100 max-w-md w-full rounded-lg px-8 ">
          <h1 class="px-4 my-8 text-center text-2xl font-bold">Register</h1>
          <div class="w-full px-4 my-3">
            <label for="name_regis" class="text-base font-semibold tracking-wider">Name</label>
            <input type="text" id="name_regis" class="w-full p-3 mt-2 text-base rounded-lg focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" placeholder="Email">
          </div>
          <div class="w-full px-4 my-3">
            <label for="email_regis" class="text-base font-semibold tracking-wider">Email</label>
            <input type="email" id="email_regis" class="w-full p-3 mt-2 text-base rounded-lg focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" placeholder="Password">
          </div>
          <div class="w-full px-4 my-3">
            <label for="password_regis" class="text-base font-semibold tracking-wider">Password</label>
            <input type="password" id="password_regis" class="w-full p-3 mt-2 text-base rounded-lg focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" placeholder="***">
          </div>
          

          <p class="text-sm text-secondary w-full text-center">Already have account? <RouterLink :to="{ name: 'login' }" class="text-sky-500 hover:underline">Login</RouterLink></p>
          <div class="w-full px-4 mt-6 mb-8 flex justify-center">
            <button type="submit" class="bg-primary text-white px-6 py-2 rounded-md shadow-md font-semibold hover:bg-teal-400 transition duration-300">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>