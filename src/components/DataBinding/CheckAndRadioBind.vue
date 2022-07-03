<template>
    <h1>Check Boxes and Radio Buttons Binding</h1>
    <br>
    <br>
    <h1>Preffered Technology : {{checkedNames}}</h1>
    <input type="checkbox" value="Java" id="java" v-model="checkedNames">
    <label for="java">Java</label>
    <br>
    <input type="checkbox" value="PHP" id="php" v-model="checkedNames">
    <label for="php">PHP</label>
    <br>
    <input type="checkbox" value="Python" id="python" v-model="checkedNames">
    <label for="python">Python</label>
    <br>
    <br>
    <h1>Radio Button Values : {{radioValues}}</h1>
    <input type="radio" value="Student" id="student" name="student" v-model="radioValues">
    <label for="student">Student</label>
    <input type="radio" value="Teacher" id="teacher" name="student" v-model="radioValues">
    <label for="teacher">Teacher</label>
</template>

<script>
export default {
    name: "CeckRadioBind",
    data(){
        return{
            checkedNames:[],
            radioValues:null,
        }
    },
}
</script>