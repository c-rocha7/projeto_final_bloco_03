import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold">
            <img
              src="https://ik.imagekit.io/7aauac/farmacia_react/logo.png?updatedAt=1740486765854"
              alt="Logo"
              className="w-60"
            />
          </Link>

          <div className="flex-1 flex justify-center items-center relative w-30 text-black">
            <form className="w-3/4 flex justify-center">
              <input
                className="w-10/12 h-9 rounded-lg px-4 py-4 focus:outline-none bg-white"
                type="search"
                placeholder="Procurar"
                id="busca"
                name="busca"
                required
              />
              <button
                type="submit"
                className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-900 rounded-lg border border-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
              >
                <MagnifyingGlass size={14} weight="bold" />
              </button>
            </form>
          </div>

          <div className="flex gap-4 items-center">
            <Link to={"/categorias"} className="hover:underline">
              Categorias
            </Link>
            <Link to={"/cadastrarcategoria"} className="hover:underline">
              Cadastrar categoria
            </Link>
            <a href="" target="_blank">
              <User size={30} weight="bold" />
            </a>
            <a href="" target="_blank">
              <ShoppingCart size={30} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
