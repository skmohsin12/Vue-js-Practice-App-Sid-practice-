<template>
    <h1>Drop Down List Binding</h1>
    <h2>Drop Dwon Items : {{listData}}</h2>
    <select name="" id="" v-model="listData">
        <option disabled value="">Select One Item</option>
        <option >Item1</option>
        <option >Item2</option>
        <option >Item3</option>
    </select>
    <br>
    <br>
    <h1>Second List with for-in Loop :) see magic</h1>
    <br>
    <h1>{{selected}}</h1>
    <select name="" id="" v-model="selected">
        <option v-for="option in options" :key="option.value">
            {{option.text}}
        </option>
    </select>

</template>

<script>
export default {
    name: "DropDwonBinding",
    data(){
        return{
            listData: null,

            selected:  null,
            options:[
                {text: "One", value: 1},
                {text: "Two", value: 2},
                {text: "Three", value: 3},
            ]
        }
    }
}
</script>