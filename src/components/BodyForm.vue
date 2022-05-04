<template>

  <div>
    <nav-bar :notificaciones="numeroNotificaciones"></nav-bar>

    <div class="container">
      <div class="row">
        <div class="mt-5 col-md-12">
          <h1 class="text-white">Lista de Tareas</h1>

          <form class="formulario-vue">
            <div class="form-row">
              <div class="form-group col-md-12">
                <input
                  v-model="tarea.titulo"
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Titulo"
                />
              </div>
              <div class="form-group col-md-12">
                <input
                  type="text"
                  v-model="tarea.responsable"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Responsable"
                />
              </div>
              <div class="form-group col-md-12">
                <input
                  type="text"
                  v-model="tarea.descripcion"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Descripcion"
                />
              </div>
              <div class="form-group col-md-12">
                <select
                  v-model="tarea.prioridad"
                  id="inputState"
                  class="form-control"
                >
                  <option :value="1" selected>Low</option>
                  <option :value="2">Medium</option>
                  <option :value="3">High</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              @click="agregarTarea()"
              class="btn btn-primary"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div
          :key="t.idtarea"
          v-for="t in tareas"
          class="mb-5 col-md-4 col-lg-4 col-sm-12"
        >
          <div class="card text-center">
            <div class="card-header">
              <div class="col-12">
                <h2>{{ t.titulo }}</h2>
              </div>
              <div class="col-12">
                <span class="badge badge-danger rounded">{{
                  t.prioridad
                }}</span>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ t.descripcion }}</h5>
              <p class="card-text">
                <span class="badge badge-primary rounded">{{
                  t.responsable
                }}</span>
              </p>
            </div>
            <div class="card-footer text-muted">
              <a
                href="#"
                @click.prevent="eliminarTarea(t.idtarea)"
                class="btn btn-danger"
                >Eliminar</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./Layouts/NavBar.vue";
export default {
  components: { NavBar },
  name: "BodyForm",
  data() {
    return {
      numeroNotificaciones: 0,
      tarea: {
        idtarea: "",
        titulo: "",
        responsable: "",
        descripcion: "",
        prioridad: 1,
      },
      tareas: [],
    };
  },
  methods: {
    agregarTarea() {
      this.tarea.idtarea = this.tareas.length + 1;
      this.tareas.push(this.tarea);
      this.$store.commit("ADD_TAREA");
      this.tarea = {
        idtarea: "",
        titulo: "",
        responsable: "",
        descripcion: "",
        prioridad: 1,
      };

      this.saveTareas();
    },
    eliminarTarea(id) {
      const text = "Esta seguro de eliminar esta tarea?";
      if (confirm(text) == true) {
        this.tareas = this.tareas.filter((tarea) => tarea.idtarea !== id);
        this.$store.commit("DELETE_TAREA");
        this.saveTareas();
      } else {
        alert("No se elimino la tarea");
      }
    },
    saveTareas() {
      const tareas = JSON.stringify(this.tareas);
      localStorage.setItem("tareas", tareas);
    },
  },
  mounted() {
    if (localStorage.getItem("tareas")) {
      try {
        this.tareas = JSON.parse(localStorage.getItem("tareas"));

        this.numeroNotificaciones = Object.keys(this.tareas).length;
        console.log(this.numeroNotificaciones);

        this.$store.commit("SET_TAREAS", this.numeroNotificaciones);
      } catch (e) {
        console.log(e);
      }
    }
  },
};
</script>

<style scoped>
.formulario-vue {
  max-width: 600px;
  margin: 0 auto; /* Added */
  float: none; /* Added */
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}
</style>

