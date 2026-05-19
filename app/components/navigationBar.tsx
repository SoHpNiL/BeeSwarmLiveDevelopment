import Link from 'next/link';

const NavigationBar = () => {
  // TODO: UI design
  // TODO: mf breakpoints holy shit I hate frontend
  return (
    <div className="drawer">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

      {/* Hamburger button */}
      <div className="drawer-content fixed top-4 left-4 z-50">
        <label htmlFor="my-drawer-1" className="btn rounded-full shadow-none hover:scale-110 transition-transform active:scale-95 duration-125">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-amber-50  min-h-full w-64 p-4 pt-16 rounded-r-xl">

          <span className="text-[2rem] absolute bottom-15 font-(family-name:--font-nabla)">
            BeeSwarm.LIVE
          </span>

          <Link href='/'><li className="sidebar-icon relative flex items-center justify-center">Home</li></Link>
           <Link href='/Pages/discord_servers/'><li className="sidebar-icon relative flex items-center justify-center">Servers</li></Link>
          <li className="sidebar-icon relative flex items-center justify-center">Settings</li>
        </ul>
      </div>
    </div>
  );
}
export default NavigationBar;