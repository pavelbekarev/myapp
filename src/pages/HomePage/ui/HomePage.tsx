import AboutProject from "#widgets/AboutProject"
import { Footer } from "#widgets/Footer/ui/Footer"
import Header from "#widgets/Header"
import MainBanner from "#widgets/MainBanner"
import "../style.scss"

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <MainBanner />
                <AboutProject />
            </main>
            <Footer />
        </>
    )
}
