const Navigation = () => {
    return (
        <header className="nav-container nav-container-home">
            <div className="nav-group group-home">
                <a href="/">
                    <img
                        className="nav-icon nav-icon-home"
                        src={require("images/nav/ja_logo.svg")}
                    />
                </a>
            </div>

            <nav className="nav-home">
                <a className="nav-link nav-link-home" href="work" id="work-nav">
                    {" "}
                    work{" "}
                </a>
                <a
                    className="nav-link nav-link-home"
                    href="about"
                    id="about-nav"
                >
                    {" "}
                    about{" "}
                </a>
                <a
                    className="nav-link nav-link-home"
                    href="https://drive.google.com/file/d/1YO9NydUxXD_8gvV6cSPo4rg69lbI5FA4/view"
                    target="_blank"
                    id="resume-nav"
                >
                    {" "}
                    resume{" "}
                </a>
            </nav>

            <a
                href="#nav-toggle"
                className="backdrop"
                tabIndex="-1"
                aria-hidden="true"
                hidden
            ></a>
        </header>
    );
};

export default Navigation;
