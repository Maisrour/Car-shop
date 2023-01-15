<template>
  <div class="sidebar-nav">
    <ul>
      <li>
        <router-link
          v-for="(eachCar, i) in carTypes"
          :key="i"
          :to="{ name: 'EachCar', params: { carType: eachCar.carName } }"
        >
          <a>{{ eachCar.carName }}</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import carTypes from "@/json/carTypes.json";
export default {
  name: "Sidebar",
  data() {
    return {
      carTypes: carTypes,
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
  width: 100%;
  background-color: #4c4f60;
}

.sidebar-nav a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  display: block;
  border-bottom: 2px solid #fff;
  height: 50px;
  text-align: center;
  margin: 10px;
}
</style>
