import Link from "next/link";
import React from "react";

const Navigation = () => {
    const [showNav, toggleNav] = React.useState(true);

    React.useEffect(() => {
        const isDesktop = () => window.innerWidth > 801;
        const isMobile = () => window.innerWidth < 801;

        const showOnResize = () => {
            if (isDesktop()) {
                toggleNav(true);
            }
            if (isMobile() && showNav) {
                toggleNav(false);
            }
        };

        window.addEventListener("resize", showOnResize);

        if (isMobile()) {
            toggleNav(false);
        }

        return () => {
            window.removeEventListener("resize", showOnResize);
        };
    }, []);

    return (
        <nav className="nav-container">
            <div className="nav-group">
                <Link href="/">
                    <a>
                        <img
                            className="nav-icon"
                            src={require("images/nav/ja_logo.svg")}
                        />
                    </a>
                </Link>
            </div>
            {!showNav && (
                <a
                    onClick={() => {
                        toggleNav(true);
                    }}
                >
                    <img
                        className="nav-icon"
                        src={require("images/nav/hamburger.svg")}
                        id="nav-toggle"
                    />
                </a>
            )}
            <div
                id="nav-menu"
                style={{ display: showNav ? "initial" : "none" }}
                className="nav-menu"
            >
                <a onClick={() => toggleNav(false)} className="nav-close">
                    <img
                        src={require("images/nav/closeicon.svg")}
                        className="nav-icon"
                        id="nav-close"
                    />
                </a>
                <div className="nav-link-container">
                    <Link href="/">
                        <a className="nav-link" id="home-nav">
                            home
                        </a>
                    </Link>
                    <Link href="/work">
                        <a className="nav-link" id="work-nav">
                            work
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="nav-link" id="about-nav">
                            about
                        </a>
                    </Link>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1YO9NydUxXD_8gvV6cSPo4rg69lbI5FA4/view"
                        className="nav-link"
                        id="resume-nav"
                    >
                        resume
                    </a>
                </div>
            </div>
            <a
                href="#nav-toggle"
                className="backdrop"
                tabIndex="-1"
                aria-hidden="true"
                hidden
            ></a>
        </nav>
    );
};

export default Navigation;
