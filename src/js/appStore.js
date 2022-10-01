export const appStore = {
    state: {
        APP: {
            ThemeMode: "light"
        }
    },
    getters: {
        APP: ({ state }) => {
            return state.APP;
        },
    },
    actions: {
        setThemeMode: ({
            state
        }, { ThemeMode }) => {
            const html = document.querySelector('html');
            if (state.APP.ThemeMode === "dark" && ThemeMode !== "dark") {
                html.classList.remove("dark")
            }
            if (state.APP.ThemeMode === "light" && ThemeMode === "dark") {
                html.classList.add("dark")
            }
            state.APP = {
                ...state.APP,
                ThemeMode: ThemeMode
            }
        }
    }
};