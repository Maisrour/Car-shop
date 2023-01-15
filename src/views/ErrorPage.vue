<template>
    <div class="error-page"></div>
    <ErrorPageDetails/>
  
</template>
  
<script>
import ErrorPageDetails from '@/components/errorpage/ErrorPage.vue'
export default {
    name:"ErrorPage",
    components : {
        ErrorPageDetails,
    }
};

</script>