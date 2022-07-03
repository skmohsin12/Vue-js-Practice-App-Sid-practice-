<template>
    <h1>Submitting Form Data</h1>
    <form @submit.prevent="sendData" method="post">
        <label for="">Email</label>
        <input type="email" placeholder="Enter Email" v-model="posts.email"><br><br>
        <label for="">Password</label>
        <input type="password" placeholder="Enter Password" v-model="posts.password"><br><br>

        <button type="submit">Send Data</button>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name:"PostForm",

    data(){
        return{
            posts:{
                email: null,
                password: null,
            }
        }
    },

    methods:{
        sendData(){
            axios.post("http://localhost:5000/posts", this.posts)
            .then((err)=>console.log("Error Occured" + err))
            console.log("Form Data", this.email, this.password)
        }
    }
}
</script>