import { BASE_URL } from "../config/config";

console.log(BASE_URL)

const apiRoutes = {
    authenticate: {
        login: BASE_URL+'/kanban/api/v1/users/login',
        signup: BASE_URL+'/kanban/api/v1/users/signup'
    }
}

export default apiRoutes