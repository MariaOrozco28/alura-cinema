import Banner from "components/Banner"
import styles from "./Favoritos.module.css"
import Titulo from "components/Titulo"
import Card from "components/Card"
import { useFavoritosContext } from "Context/Favoritos"
import Container from "components/Container"


function Favoritos() {
    const { favorito } = useFavoritosContext()

    return (
        <>
            <Banner img="favoritos" color="#00BF633D" />
            <Titulo>
                <h1>Favoritos</h1>
            </Titulo>
            <Container>
                <section className={styles.containerFav}>
                    {favorito.map(fav => {
                        return <Card {...fav} key={fav.id} />
                    })}

                </section>
            </Container>

        </>
    )
}

export default Favoritos