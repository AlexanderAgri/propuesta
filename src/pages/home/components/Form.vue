<template>
  <form
    :onchange="searchIp(v$.ip.$model)"
    @submit.prevent="searchIpAddress(v$.ip.$model)"
    class="form"
  >
    <input
      v-model.trim="v$.ip.$model"
      type="search"
      placeholder="Search for any IP Adress or domain"
    />
    <button type="submit" class="btn">
      <img src="@/static/arrow.svg" alt="arrow" />
    </button>
    <span
      v-for="error of v$.ip.$errors"
      :key="error.$uid"
      class="message__form"
    >
      {{ error.$message }}</span
    >
  </form>
</template>

<script>
import { ref } from "vue";
import { useForm } from "@/hooks/useForm";
import { useStore } from "vuex";

export default {
  setup() {
    const ip = ref("");
    const v$ = useForm({ ip });
    const { dispatch } = useStore();

    const searchIpAddress = (ip) => dispatch("tracker/searchIpAddress", ip);
    const searchIp = (ip) => dispatch("tracker/searchIp", ip);

    return { ip, searchIp, searchIpAddress, v$ };
  },
};
</script>
