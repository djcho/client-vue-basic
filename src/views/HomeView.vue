<template>
  <div id="app" class="flex flex-col h-screen dark:bg-gray-900">
    <Navbar />
    <div id="wrapper" class="flex flex-grow">
      <Sidebar class="w-1/7 bg-gray-800 text-white" />
      <div id="content" class="flex-grow ml-60">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Sidebar,
    Navbar,
  },
};
</script>