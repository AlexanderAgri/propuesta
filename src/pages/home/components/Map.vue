<template>
  <l-map :zoom="12" :center="coordenadas()" style="height: 68vh">
    <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
    <l-marker :lat-lng="coordenadas()">
      <l-popup>Your IP is here</l-popup>
      <l-icon
        iconUrl="https://res.cloudinary.com/dlgvxohur/image/upload/v1625674814/proyectos/ip-address-tracker/icon.svg"
      ></l-icon>
    </l-marker>
  </l-map>
</template>

<script>
import { useStore } from "vuex";
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LMarker,
  LPopup,
  LIcon,
  LTileLayer,
} from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LMarker,
    LPopup,
    LIcon,
    LTileLayer,
  },
  setup() {
    const { state } = useStore();
    const { tracker } = state;
    const coordenadas = () => {
      return tracker.ip
        ? [tracker.ip.location.lat, tracker.ip.location.lng]
        : ["33.7819589", "-84.3894095"];
    };
    return { coordenadas };
  },
};
</script>
<style>
.leaflet-pane .leaflet-marker-pane img {
  width: 2rem !important;
}
</style>
