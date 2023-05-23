import React from "react";
import CustomLink from "./CustomLink";
import { links } from "./SideNavData";

function SideNav() {
  return (
    <div className='ml-3 h-screen overflow-auto pb-10 md:overflow-hidden md:hover:overflow-auto'>
      {links.map((link) => (
        <CustomLink to={link.path} key={link.id}>
          {" "}
          {link.icon} <span>{link.title}</span>
        </CustomLink>
      ))}

      {/* <CustomLink to='/RecipeManagement'>Manage Recipe</CustomLink>
      <CustomLink to='/Feedback'>Feedback</CustomLink>
      <CustomLink to='/UserManagement'>Manage User</CustomLink> */}
    </div>
  );
}

export default SideNav;
