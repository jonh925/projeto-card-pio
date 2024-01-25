import NavBar from "./NavBar"
export function Header (){
    return(
        <header className="w-full h-20 fixed top-0 left-0 mb-20 bg-slate-600 flex justify-center">
         <NavBar/>
        </header>
    )
}