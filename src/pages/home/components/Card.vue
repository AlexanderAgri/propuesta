<template>
  <div class="resultados">
    <img
      v-if="tracker.loader"
      class="loader"
      src="@/static/loader.svg"
      alt="loader"
    />
    <ul v-if="tracker.ip" class="resultados-card">
      <li class="resultado-contenido">
        <span class="resultado-titulo">IP ADRESS</span>
        <p class="resultado-ip">
          {{ tracker.ip.ip }}
        </p>
      </li>
      <li class="resultado-contenido">
        <span class="resultado-titulo">LOCATION</span>
        <p class="resultado-ip">
          {{ tracker.ip.location.city }}, {{ tracker.ip.location.region }}
          {{ tracker.ip.location.postalCode }}
        </p>
      </li>
      <li class="resultado-contenido">
        <span class="resultado-titulo">TIMEZONE</span>
        <p class="resultado-ip">
          UTC
          {{ tracker.ip.location.timezone }}
        </p>
      </li>
      <li class="resultado-contenido">
        <span class="resultado-titulo">ISP</span>
        <p class="resultado-ip">
          {{ tracker.ip.isp }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "Card",
  setup() {
    const { state } = useStore();
    const tracker = state.tracker;

    return { tracker };
  },
};
</script>
