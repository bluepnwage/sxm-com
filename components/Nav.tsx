import styles from "./Nav.module.css";

export function Nav() {
  return (
    <header className={"flex flex-col bg-white border-b border-zinc-200 justify-center items-center"}>
      <div className="w-4/5 flex justify-between  py-8">
        <div className="flex gap-6 items-center">
          <p className="font-bold text-2xl">SXM COM</p>
        </div>
        <input
          className="rounded-full focus:border-sky-500 px-2 py-1 bg-zinc-100 border border-zinc-400 outline-none appearance-none"
          type={"search"}
        />
      </div>
      <div className="flex justify-center w-full border-t border-zinc-200">
        <nav className="w-5/6">
          <ul className="flex gap-5">
            <li className="grow basis-1/6 duration-200 ease-out hover:text-sky-600 hover:bg-zinc-100 py-5 text-center">
              Votre Collectivite{" "}
            </li>
            <li className="grow basis-1/6 duration-200 ease-out hover:text-sky-600 hover:bg-zinc-100 py-5 text-center">
              Saint-Martin et vous{" "}
            </li>
            <li className="grow basis-1/6 duration-200 ease-out hover:text-sky-600 hover:bg-zinc-100 py-5 text-center">
              Pratique{" "}
            </li>
            <li className="grow basis-1/6 duration-200 ease-out hover:text-sky-600 hover:bg-zinc-100 py-5 text-center">
              Decouvrir et sortir{" "}
            </li>
            <li className="grow basis-1/6 duration-200 ease-out hover:text-sky-600 hover:bg-zinc-100 py-5 text-center">
              Entreprendre{" "}
            </li>
            <li className="grow basis-1/6 duration-200 ease-out hover:text-sky-600 hover:bg-zinc-100 py-5 text-center">
              Service en ligne{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
