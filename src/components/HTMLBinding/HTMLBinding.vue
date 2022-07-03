<template>
    <h1>HTML Binding or Tag using in JS OR HTML Part</h1>
<h2>{{name}}</h2>
<div v-html="email + adrress + contact">

</div>
</template>

<script>
export default {
    name: "HTMLBinding",

    data(){
        return{
            name: "Shaikh Muneer",
            email: "<h2>mr.skmohsin999@gmail.com</h2>",
            adrress: "<h2>Nanded</h2>",
            contact: "<h2>9822840271</h2>",
        }
    }
}
</script>