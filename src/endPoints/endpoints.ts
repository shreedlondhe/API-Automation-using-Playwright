export const USER_ENDPOINTS = {
    auth:'/auth/token',
    getUsers: '/users',
    createUser: '/users',
    updateUser: (id: number) => `/users/${id}`,
    deleteUser: (id: number) => `/users/${id}`,
}