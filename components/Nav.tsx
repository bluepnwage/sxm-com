import { NavigationMenu } from "./shared/NavigationMenu/NavigationMenu";
import styles from "./Nav.module.css";
import { cx } from "cva";
export function Nav() {
  return (
    <header className={"flex flex-col items-center justicy-center  shadow-md "}>
      <div className="w-4/5 flex justify-between items-center  py-8">
        <div className="flex gap-6 items-center">
          <p className="display-small text-primary">SXM COM</p>
        </div>
        <div>
          <input
            className="rounded-full focus:border-primary-color px-2 py-1 bg-zinc-100 border border-zinc-400 outline-none appearance-none"
            type={"search"}
          />
          <button className=" inline-block ml-2 rounded-full py-1 px-2  bg-secondary-container text-on-secondary-container">
            Search
          </button>
        </div>
      </div>

      <NavigationMenu />
    </header>
  );
}
