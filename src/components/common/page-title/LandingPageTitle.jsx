

const LandingPageTitle = ({ title, subtitle }) => {
    return (
        <section className="landing-page__title">

            <h2>{subtitle}</h2>

            <h1>{title}</h1>

        </section>
    );
};

export default LandingPageTitle;