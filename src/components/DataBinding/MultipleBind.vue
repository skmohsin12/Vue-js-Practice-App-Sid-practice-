<template>
    <h1>{{txt}}</h1>
    <br><br>
    <input type="text" placeholder="Enter Email" v-model="email"><br><br>
    <input type="password" placeholder="Enter Password" v-model="passwd"><br><br>
    <button @click="getData()">Get Data</button>
</template>

<script>
export default {
    name: "MultipleBind",
    props:{
        txt: String,
    },
    data(){
        return{
            email: null,
            passwd : null,
        }
    },
    methods:{
        getData(){
            return console.log("Function Called", this.email, this.passwd)
        }
    }
}
</script>