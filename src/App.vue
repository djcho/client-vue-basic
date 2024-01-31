<template>
  <header class="p-3 bg-black text-white">
    <div>
      <div class="flex items-center justify-between">
        <!-- 좌측에 Home 링크 배치 -->
        <router-link to="/" class="nav-link px-2 text-white">Home</router-link>
      </div>
    </div>
  </header>

  <router-view/>
</template>
