<template>
    <div >
        <ul class="nav container-fluid">
            <li>
                <router-link  :to=" {name : 'Home'} ">
                    <a>Home</a>
                </router-link>
            </li>
            <li>    
                <router-link :to=" {name : 'Categories'} ">
                    <a>Categories</a>
                </router-link>
            </li>
            <li>    
                <router-link :to=" {name : 'About'} ">
                    <a>About</a>
                </router-link>
            </li>
            <li>   
                <router-link :to=" {name : 'Contact'} ">
                    <a>Contact</a>
                </router-link>
            </li>    
        </ul>
    </div>
</template>

<script>
export default{
    name:"Mainmenu",
};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0 ;
}

.nav{
    background-color: black;
    color:white;
    overflow: hidden;
    display:flex;
    justify-content: center;
    padding: 5px;
}

li{
    display: inline-block;
    padding: 10px;
}

a{
    color:white;
    padding: 10px;
    text-decoration: none;
    font-size: 19px;
}

a:hover{
    color: white;
} 
.router-link-exact-active{
    color:#90d6cc;
    border-radius:30px ;
    font-weight: 700;
}
</style>