const { Navigate, Outlet } = require("react-router-dom")

const PublicRoute = () => {
    const auth = JSON(localStorage.getItem("user"))
    return auth ? <Navigate replace to={"/todo"} /> : <Outlet />
}
export default PublicRoute