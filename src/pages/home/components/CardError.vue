<template>
  <div class="resultados">
    <img
      v-if="tracker.loader"
      class="loader"
      src="@/static/loader.svg"
      alt="loader"
    />
    <ul class="resultados-card">
      <div class="message">
        <h3 class="">An error occurred: {{ error.status }}</h3>
        <p class="">{{ error.statusText }}</p>
      </div>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "CardError",
  setup() {
    const { state } = useStore();
    const { tracker } = state;
    const { error } = tracker;
    return { error, tracker };
  },
};
</script>
