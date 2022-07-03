<template>
<h1>This is Forms Basics Validation, getting Data etc</h1>
<h2>Simple Form</h2>
<!-- <h2>{{form}}</h2> -->
<ul>
    <li v-for="(elem, index) in err" :key="index"><h3>Please enter {{elem}} </h3></li>
</ul>
<form action="">
    <label for="email">Email :</label>
    <input type="text" id="email" v-model="form.email" placeholder="Entre Email">
    <br><br>
    <label for="passwd">Enter Password</label>
    <input type="password" id="passwd" v-model="form.password" placeholder="Enter Password">
    <br><br>
    <button @click.prevent="getData">Get Form Data</button>
</form>
</template>

<script>
export default {
    name: "FormComp",

    data() {
        return {
            form: {
                email: "",
                password: "",
            },
            err: []
        }
    },

    methods: {
        getData(event) {
            console.log(this.form.email + " " + this.form.password)
            // use above one at @click event or bellow one 
            event.preventDefault()
            this.err = []
            for (const elem in this.form) {
                if (this.form[elem] === "" || this.form[elem].length === 0) {
                    this.err.push(elem)
                } 
            }
            if (this.err.length === 0) {
                    alert("Data has been submitted :)")
                }
            console.log(this.err)
        }
    }
}
</script>
