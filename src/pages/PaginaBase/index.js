import Cabecera from "components/Cabecera/Cabecera"
import Pie from "components/Pie"
import FavoritoProvider from "Context/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase(){
    return(
        <main>
            <Cabecera/>
            <FavoritoProvider>
                <Outlet/>
            </FavoritoProvider>
            <Pie/>
        </main>
    )

}

export default PaginaBase