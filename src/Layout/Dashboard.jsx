import { TfiMenuAlt } from "react-icons/tfi";

const Dashboard = () => {
  return (
    <>
      <div className="relative bg-slate-400 max-w-full pt-10"></div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className=" absolute -top-9 right-3 cursor-pointer hover:bg-slate-500 hover:text-white px-2 py-1 drawer-button lg:hidden rounded"
          >
            <TfiMenuAlt size={24} />
          </label>
        </div>

        <div className="drawer-side mt-10 lg:mt-0">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
