export const authStore = {
    state: {
        Auth: {
            Token: "1"
        }
    },
    getters: {
        Auth: ({ state }) => {
            return state.Auth;
        },
    },
    actions: {
        setAuth: ({
            state
        }, Token) => {
            state.Auth.Token = Token
        }
    }
};