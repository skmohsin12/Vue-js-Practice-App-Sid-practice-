<template>
    <h1>Fetching Data with Fetch Method</h1>
    <ul>
        <li>{{apiData.id}}</li>
        <li>{{apiData.title}}</li>
        <li>{{apiData.body}}</li>
    </ul>
</template>

<script>
export default {
    name : "FetchMethod",

    data(){
        return{
            apiData: [],
        }
    },

    async mounted(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await response.json()
        this.apiData = data
        console.log(data)
    }
}
</script>