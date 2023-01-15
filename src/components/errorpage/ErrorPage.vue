<template>
    <div class="error-Page-details">
        <img src="@/assets/404_page_cover.jpg">
        <div>
            <button type="button" @click="goBack()" class="btn btn-primary">Go Back</button>
        </div>
    </div>
</template>
  
<script>

export default{
    name:"ErrorPageDetails",
    methods : {
        goBack(){ 
            this.$router.push({name:'Home'})
        }
    }
};

</script>

<style scoped>
img{
    width: 100%;
    height: 100vh;
}
.btn.btn-primary{
    position: absolute;
    top: 44%;
    left: 13%;
    z-index: 2;
    background-color: #336667;
    width: 144px;
    height: 60px;
    font-size: 25px;
    border-radius: 40px;
    font-weight: 700;
}
</style>
  