import Feedback from "#widgets/Feedback";
import { Footer } from "#widgets/Footer/ui/Footer";
import Header from "#widgets/Header";
import ResidenceGallery from "#widgets/ResidenceGallery";
import "../style.scss"

export function ResidencePage() {
    return (
        <>
            <Header />
            <main>
                <section className="residence">
                    <div className="container">
                        <ResidenceGallery />
                        <Feedback />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}