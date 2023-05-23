import React from "react";
import { usePageContext } from "../../contexts/PageContext";

function TopNav() {
  const { activeMenu, setActiveMenu } = usePageContext();

  const handleToggleMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className='headnav fixed w-full md:static'>
      <button
        type='button'
        onClick={() => handleToggleMenu()}
        className='relative rounded-full p-3 text-xl hover:bg-slate-100'
      >
        Menu Toggle
      </button>
    </div>
  );
}

export default TopNav;
