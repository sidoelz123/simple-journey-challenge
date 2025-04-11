import { createMemoryHistory, createRouter } from "vue-router"
import {HomePage} from "../pages"

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {path: "/", component: HomePage}
    ],
  })
  
  export default router