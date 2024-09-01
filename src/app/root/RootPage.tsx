import { Link, Outlet } from "react-router-dom";

export const RootPage = () => (
  <div className="flex flex-col h-full">
    <div className="grow">
      <Outlet />
    </div>
    <footer>
      <div className="bottom-0 h-20 flex flex-row justify-between">
        <Link to={"/home"}>home</Link>
        <Link to={"/leaderboard"}>leaderboard</Link>
        <Link to={"/invite"}>invite</Link>
        <Link to={"/tasks"}>tasks</Link>
      </div>
    </footer>
  </div>
);
