import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({

    state:{

        NumNotificaciones: 0

    },
    mutations:{
        ADD_TAREA: function(state){

            state.NumNotificaciones++;

        },
        DELETE_TAREA: function(state){

            state.NumNotificaciones--;

        },
        SET_TAREAS: function(state, num){
                
                state.NumNotificaciones = num;
    
        }
    }

})