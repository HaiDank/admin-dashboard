import React from "react";
import AdminHome from "./pages/admin/AdminHome.jsx";
import Home from "./pages/home/index.jsx";
import UserLayout from "./pages/UserLayout.jsx";

const App = () => {
  const user = false
  const role = 0
  return (
    <>
      {role === 1 ? <AdminHome /> : <UserLayout />}
    </>
  )

};

export default App;
