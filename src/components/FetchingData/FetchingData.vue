<template>
  <h1>Fetching Data from Json.placeholder</h1>
  <ul>
      <li>{{api.id}} AND {{api.title}}  AND {{api.body}}</li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "FetchingData",

  data() {
    return {
      api: [],
    };
  },

  async mounted() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    this.api = response.data;
    console.log(response.data)
  },
};
</script>
