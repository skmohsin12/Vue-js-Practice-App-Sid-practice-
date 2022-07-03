<template>
  <h1>Watcher Example</h1>
  <h1>{{ count }}</h1>
  <button @click="count = count + 1">Increment {{ count }} Times</button>
  <button @click="count = count - 1">Decrement Count</button>
  <br />
  <h1>Second Counter: {{ num }}</h1>
  <button @click="num = num + 1">+</button>
</template>

<script>
export default {
  name: "WatcherExa",

  data() {
    return {
      count: 0,
      num: 0,
    };
  },

  watch: {
    count(val, prev) {
      if (val > 5 && val > prev) {
        alert("Stop Counting");
      }
    },

    num(val) {
      if (val > 5) {
        this.num = 0;
      }
    },
  },
};
</script>
