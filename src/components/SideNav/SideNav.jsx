import React from "react";
import CustomLink from "./CustomLink";

function SideNav() {
  return (
    <nav className='fixed left-0 top-0 h-screen w-48 border-r-2 border-solid bg-white text-black'>
      <ul>
        <CustomLink to='/'>DashBoard</CustomLink>
        <CustomLink to='/RecipeManagement'>Manage Recipe</CustomLink>
        <CustomLink to='/Feedback'>Feedback</CustomLink>
        <CustomLink to='/UserManagement'>Manage User</CustomLink>
      </ul>
    </nav>
  );
}

export default SideNav;
