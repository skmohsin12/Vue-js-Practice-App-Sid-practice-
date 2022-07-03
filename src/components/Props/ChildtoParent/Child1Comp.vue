<template>
    <h1>This is Child Component</h1>
    <button @click="data(name)">Send to Parent</button>
</template>

<script>
export default {
    name:"Child1Comp",

    props:{
        data: Function,
    },

    data(){
        return{
            name: "Alhamdulillah"
        }
    }
}
</script>