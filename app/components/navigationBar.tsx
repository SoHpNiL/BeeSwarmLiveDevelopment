const NavigationBar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      
      {/* Hamburger button */}
      <div className="drawer-content fixed top-4 left-4 z-50">
        <label htmlFor="my-drawer-1" className="btn rounded-2xl shadow-none hover:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-amber-50 min-h-full w-64 p-4 pt-16">
          
          <h1 className="text-lg font-medium tracking-tight mb-6 px-4 sidebar-icon h-35 w-35">
            BeeSwarm<span className="text-amber-600">.Live</span>
          </h1>

          <li className="sidebar-icon"><a>Home</a></li>
          <li className="sidebar-icon"><a>Servers</a></li>
          <li className="sidebar-icon"><a>Settings</a></li>
        </ul>
      </div>
    </div>
  );
}
export default NavigationBar;