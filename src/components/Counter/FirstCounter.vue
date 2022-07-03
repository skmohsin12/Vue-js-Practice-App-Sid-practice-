<template>
    <h1>First Counter with Vue</h1>
    <h1>{{count}}</h1>
    <button @click="count++">Click to Increment</button>
    <button @click="count--">Click to Increment</button>
    <br>
    <button @click="incrementCount()">Increment with this keyword</button>
    <button @click="decrementCount()">Decrement with this keyword</button>
</template>

<script>
export default {
    name: "FirstCounter",
    data(){
        return{
            count: 0,
        }
    },
    methods:{
        incrementCount(){
            this.count=this.count+1;
        },
        decrementCount(){
            this.count = this.count-1;
        }
    }
}
</script>