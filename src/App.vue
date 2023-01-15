<template>
  <div>
    <Mainmenu/>
    <RouterView />
  </div>
</template>


<script >
import Mainmenu from '@/components/navbar/Mainmenu.vue'
export default {
  components: {
    Mainmenu,

  }
};

import { RouterLink, RouterView } from 'vue-router'
</script>



