<template>
  <div class="home row">
    <div class="col-2">
      <Sidebar :CarsData="myCars"/>
    </div>
    <div class="col-10">
      <Cars :CarsData="myCars"/>      
    </div>
  </div>

</template>

<script>
import Cars from '../components/cars/Cars.vue';
import Sidebar from '../components/sidebar/Sidebar.vue';
import getCarsJson from '@/json/Cars.json';

export default{
    name: "Home",
    data(){
      return{
        myCars : getCarsJson,
      };
    },
    components: { 
      Sidebar,
      Cars,

    }
};

</script>