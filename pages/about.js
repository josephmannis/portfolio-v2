import Navigation from "../components/nav";

const About = () => {
    return (
        <>
            <Navigation />
            <div className="main-content-container">
                <div className="about-text-container">
                    <h1 className="about-name"> joe annis </h1>

                    <p className="about-description">
                        Hi! I am a creative coder interested in projects that
                        people use to better themselves. I have experience in
                        native mobile development, web development, design, and
                        group leadership.
                    </p>

                    <p className="about-description">
                        Aside from work, I love to explore outdoors, help lead
                        two on-campus mentorship programs as Branding Director
                        of
                        <a
                            className="nav-link"
                            href="https://web.northeastern.edu/generate/"
                            target="_blank"
                        >
                            Generate
                        </a>
                        and Vice President of
                        <a
                            className="nav-link"
                            href="https://web.northeastern.edu/makers/"
                            target="_blank"
                        >
                            Makers Club
                        </a>
                        , and ponder the world around me.
                    </p>

                    <p className="about-description">
                        <a
                            className="nav-link"
                            href="https://github.com/josephmannis"
                            target="_blank"
                        >
                            GitHub
                        </a>{" "}
                        |
                        <a
                            className="nav-link"
                            href="https://www.linkedin.com/in/josephmannis/"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </p>
                </div>

                <img
                    src={require("images/about/about-splash.svg")}
                    id="about-splash"
                />
                <img
                    src={require("images/about/about-splash-flip.svg")}
                    id="about-splash-mobile"
                />
            </div>
        </>
    );
};

export default About;
