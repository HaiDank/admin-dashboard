import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-black";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-black dark:text-black dark:hover:text-black hover:bg-slate-100 m-2";

  return (
    <Link className={isActive ? activeLink : normalLink} to={to}>
      {" "}
      {children}{" "}
    </Link>
  );
}

export default CustomLink;
