<template>
  <div class="justify-content-evenly row">
    <div class="col-4 each-car" v-for="(eachcar, i) in getCarInfo" :key="i">
      <img
        :src="'/src/assets/' + eachcar.name + '/' + eachcar.maiImage"
        class="rounded d-block mx-auto maiImage"
      />

      <h4 class="text-center">{{ eachcar.name }} | {{ eachcar.model }}</h4>
      <div>
        <div class="float-start">
          <button type="button" class="btn btn-light">{{ eachcar.price }}</button>
        </div>
        <div class="float-end">
          <router-link
            :to="{
              name: 'CarInfo',
              params: { carName: eachcar.name, carId: eachcar.id },
            }"
          >
            <button type="button" class="btn btn-primary">More Details</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getCarsJson from "@/json/Cars.json";
export default {
  name: "EachCar",
  data() {
    return {
      myCarDetails: getCarsJson,
      carType: this.$route.params.carType,
    };
  },
  computed: {
    getCarInfo() {
      let carData = [];
      for (let i = 0; i < this.myCarDetails.length; i++) {
        if (this.myCarDetails[i].name == this.carType) {
          carData.push(this.myCarDetails[i]);
        }
      }
      return carData;
    },
  },
};
</script>
<style scoped>
.each-car img {
  width: 300px;
  height: 200px;
  margin-bottom: 10px;
}
.each-car {
  padding: 10px;
  margin-bottom: 10px;
  border: 10px solid #eee;
}
</style>
