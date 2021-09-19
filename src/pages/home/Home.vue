<template>
  <div class="bg">
    <Header />
    <Form />
  </div>
  <CardError v-if="tracker.error" />
  <Card v-else />
  <CardError v-if="tracker.error" />
  <Map v-else />
</template>

<script>
import { useStore } from "vuex";

import Header from "@/layouts/Header";
import Form from "./components/Form";
import Map from "./components/Map";
import Card from "./components/Card";
import CardError from "./components/CardError";

export default {
  name: "Home",
  components: { Header, Form, Card, CardError, Map },
  setup() {
    const { state } = useStore();
    const { tracker } = state;
    return { tracker };
  },
};
</script>
