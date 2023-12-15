<!-- Este componente é o componente principal do projeto -->
<!-- É onde tudo inicia, onde tudo vai ser carregado -->
<script>
import { RouterView } from 'vue-router';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default {
    components: {
        Header,
        Sidebar
    }
}
</script>

<template>
    <div>
        <Header />
        <Sidebar />
        <!-- Aqui todas as rotas vão ser carregadas -->
        <RouterView />
    </div>
</template>

