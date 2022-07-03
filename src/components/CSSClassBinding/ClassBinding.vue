<template>
    <h1 class="heading">CSS and HTML Class Bindings</h1>
    <!-- bellow make true of false for apply of not -->
    <h1 :class="{heading: true}">Second Heading</h1>

    <!-- set colorFull property within method to true or false -->
    <!-- as follows you can add one static and multiple dynamic classes -->
    <h1 class="staticClass" :class="{heading: colorFull, err: true}">Second Heading</h1>
    <button @click="colorFull = !colorFull">Toggle Class</button>
</template>

<script>
export default {
    name:"ClassBinding",

    data(){
        return{
            // colorFull: true,
            colorFull: false,
        }
    }
}
</script>


<style scoped>
 .heading{
     background-color:  aqua;
     color: brown;
     font-style: italic;
 }
 .err{
     color: red;
 }
 .staticClass{
     color: yellowgreen;
 }
</style>