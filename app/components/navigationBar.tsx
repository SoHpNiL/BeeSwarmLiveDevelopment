const NavigationBar = () => {
  // TODO: UI design
  return (
    <div className="drawer">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

      {/* Hamburger button */}
      <div className="drawer-content fixed top-4 left-4 z-50">
        <label htmlFor="my-drawer-1" className="btn rounded-2xl shadow-none hover:scale-110 transition-transform active:scale-95 duration-125">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-amber-50 min-h-full w-64 p-4 pt-16">

          <span className="text-[2rem] absolute top-15 gap-30 font-(family-name:--font-nabla)">
            BeeSwarm.LIVE
          </span>

          <li className="sidebar-icon"><a>Home</a></li>
          <li className="sidebar-icon"><a>Servers</a></li>
          <li className="sidebar-icon"><a>Settings</a></li>
        </ul>
      </div>
    </div>
  );
}
export default NavigationBar;