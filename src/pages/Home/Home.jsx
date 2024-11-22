import CardanoHero from "../../components/CardanoHero/CardanoHero";
import DebitCard from "./DebitCard";
import Vision from "./Vision";
import WeOffer from "./WeOffer";

const Home = () => {
    return (
        <section>
            <CardanoHero />
            <Vision />
            <WeOffer />
            <DebitCard />
        </section>
    );
};

export default Home;