<template>
    <h1>Showint use of Refs in Vue.js</h1>
    <input type="text" ref="inpt">
    <br><br>
    <button @click="getRef">Set Preference</button>
</template>

<script>
export default {
    name: "UseofRefs",

    methods:{
        getRef(){
            // You can ser focus, set any Value, color etc as bellow
            this.$refs.inpt.focus()
            this.$refs.inpt.value="Alhamdulillah"
            this.$refs.inpt.style.color="red"
            alert(this.$refs.inpt.value)
            console.log(this.$refs.inpt.value)
        }
    }
}
</script>