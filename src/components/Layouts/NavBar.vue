<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <h1><a class="navbar-brand" href="#">ADMINISTRACION DE TAREAS</a></h1>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Tareas <span class="badge badge-pill badge-info ml-2"> {{ NumNotificaciones }} </span> </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["NumNotificaciones"]),
  },
  name: "NavBar",
  props: ["notificaciones"],

  data() {
    return {};
  },
  methods: {},
};
</script>