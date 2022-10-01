import { createStore } from 'framework7/lite';
import { authStore } from '../pages/Auth/authStore';
import { appStore } from './appStore';

const store = createStore({
    state: {
        ...appStore.state,
        ...authStore.state
    },
    getters: {
        ...appStore.getters,
        ...authStore.getters
    },
    actions: {
        ...appStore.actions,
        ...authStore.actions
    },
})
export default store;