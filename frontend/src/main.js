/* Pegando a instância do vue */
/* Desestruturação */
import { createApp } from "vue";
import App from './App';

import routes from './routes';

/* Como se fosse o componente principal
   onde vão ser montadas todas as peças do
   layout: header, footer, sidebar, content */
const app = createApp(App);

app.use(routes);

/* Montando toda a aplicação */
/* Na "div" com id "app", do index.html */
app.mount("#app");
