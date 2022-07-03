<template>
    <h1>Use of V-For with Arrays</h1>
    <ul>
        <li v-for="item in items" :key="item">{{item}}</li>
    </ul>
    <h1>V-For with Array of Objects</h1>
    <ul>
        <li v-for="(elem, index) in users" :key="elem.id">index No is: {{index}} -  Id is : {{elem.id}}  AND Name is : {{elem.name}}</li>
    </ul>
    <ArrMethods />
</template>

<script>
import ArrMethods from './ArrMethods.vue'
export default {
    name: "VforWithArray",
    components:{
        ArrMethods,
    },
    
    data(){
        return{
            items:[
                "First",
                "Second",
                "Third",
                "Fourth",
            ],
            users: [
                {name: "Josh", id: 1},
                {name: "Stark", id: 2},
                {name: "Rodi", id: 3},
                {name: "Doe", id: 4},
            ],
        }
    }
}
</script>