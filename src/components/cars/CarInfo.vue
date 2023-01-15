<template>
  <div class="justify-content-evenly row">
    <div class="col-8">
      <div>
        <img
          :src="'/src/assets/' + singleCar.name + '/' + singleCar.maiImage"
          class="rounded d-block mx-auto maiImage"
        />
      </div>
    </div>
    <div class="col-4">
      <h2>{{ singleCar.name }}</h2>
    </div>
  </div>
</template>

<script>
import getCarInfo from "@/json/Cars.json";

export default {
  name: "CarInfo",
  data() {
    return {
      myCarDetails: getCarInfo,
      singleCar: {},
      carName: this.$route.params.carName,
      carId: this.$route.params.carId,
    };
  },
  computed: {
    getCarInfo() {
      let carData = [];
      for (let i = 0; i < this.myCarDetails.length; i++) return carData;
    },
  },
  mounted() {
    this.singleCar = this.myCarDetails.find((el) => el.id == this.$route.params.carId);
  },
};
</script>

<style scoped>
.maiImage {
  width: 650px;
  height: 450px;
  margin: 10px;
}
h2 {
  margin: 100px;
}
</style>
