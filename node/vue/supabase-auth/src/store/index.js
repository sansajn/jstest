import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import router from '../router';
import { supabase } from "../supabase";

export default createStore({
  state: {
    user: null,  // without createPersistedState set to null after page reload
  },
  mutations: {
    setUser(state, payload) {
      console.debug('store: setUser() mutation')
      state.user = payload;
    },
  },
  actions: {
    async signInAction({ commit }, form) {  // login
      console.debug("store: signInAction()")
      try {
        const { error, user } = await supabase.auth.signIn({
          email: form.email,
          password: form.password,
        });
        if (error) throw error;
        alert("You've Signed In successfully");
        await router.push('/')
        commit('setUser', user.email)  // execute setUser mutation function
      } catch (error) {
        alert(error.error_description || error.message);
      }
    },

    async signUpAction({dispatch}, form) {  // register new account
      console.debug("store: signUpAction()")
      try {
        const { error} = await supabase.auth.signUp({
          email: form.email,
          password: form.password,
        });
        if (error) throw error;
        alert("You've been registered successfully");
        await dispatch("signInAction", form)
      } catch (error) {
        alert(error.error_description || error.message);
      }
    },

    async signOutAction({ commit }) {
      console.debug("store: signOutAction()")
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        commit('setUser', null)
        alert("You've been logged Out successfully");
        await router.push("/sign-in");
      } catch (error) {
        alert(error.error_description || error.message);
      }
    },
  },
  modules: {
  },

  plugins: [createPersistedState()],
})
