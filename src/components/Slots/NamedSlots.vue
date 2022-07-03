<template>
<div id="card">
    <header> <slot name="header">Default Header</slot> </header>
    <content> <slot name="main">Defualt Main Data</slot> </content>
    <footer> <slot name="footer">Default Footer Data</slot> </footer>
</div>
</template>

<script>
export default {
    name: "NamedSlot"
}
</script>

<style scoped>
#card{
    border: 1px solid black;
    border-radius: 5%;
    width: 200px;
    padding: 20px;
    margin: 20px;
    text-align: center;
}
</style>
