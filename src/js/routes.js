import HomePage from '../pages/Home/home.jsx';
import NotFoundPage from '../pages/404.jsx';
import store from './store.js';
import LoginPage from '../pages/Auth/Login.jsx';

//beforeEnter: checkAuth,
function checkAuth({ resolve, reject }) {
  const router = this;
  if (store.state.Auth.Token) {
      resolve();
  } else {
      reject();
      //router.navigate('/login/');
  }
}

var routes = [{
    path: '/',
    //component: HomePage,
    async: function ({
      router,
      to,
      resolve
    }) {
      const splashScreen = document.getElementById("splash-screen");
      const isSplashScreen = splashScreen.classList.contains("hidden");
      
      async function requestUser() {
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          store.dispatch("setAuth", "CfDJ8OW5OI0CPGJBgSNlGwO0x4YF7qbYKVv7KOO-N0eFtDUzXOrL7F9Xd9W1otVi4ueJOkAmAhuoHFWNkqRaFD7zvAMHMSKncl6Vo5QXKmpvy6vqxOKxSURdIey8aZPRi3Nnhp2p9la-Al5xrVKz0lignRdcCHf3O").then(() => {
            resolve({
              component: HomePage,
            });
            splashScreen.classList.add("hidden");
          });
        } catch (error) {
          // Xử lý lỗi 400
        }
      }

      if (store.state.Auth.Token && !isSplashScreen) {
        requestUser();
      } else {
        splashScreen.classList.add("hidden");
        resolve({
          component: HomePage,
        });
      }
    },
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;