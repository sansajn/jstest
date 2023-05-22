import { createRouter, createWebHistory } from 'vue-router';
import { supabase } from '../supabase';

function loadPage(view) {
  return () =>
    import(
      /* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`
    );
}

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: loadPage("Dashboard"),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: loadPage("SignUp")
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: loadPage("SignIn")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.debug('router: beforeEach()')
  const currentUser = supabase.auth.user();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  console.debug(`requiresAuth=${requiresAuth}`)
  console.debug(`currentUser:${currentUser}`)

  if(requiresAuth && !currentUser) {
    console.debug('go to sign-in')
    next('sign-in')
  }
  else if(!requiresAuth && currentUser) next("/");
  else {
    console.debug('router: next()')
    next()
  }
})

export default router
