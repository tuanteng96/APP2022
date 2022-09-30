
import { createStore } from 'framework7/lite';
import { authStore } from '../pages/Auth/authStore';

const store = createStore({
  state: {
    ...authStore.state
  },
  getters: {
    ...authStore.getters
  },
  actions: {
    ...authStore.actions
  },
})
export default store;
