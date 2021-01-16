import Link from "next/link";

const Navigation = () => {
    return (
        <header className="nav-container nav-container-home">
            <div className="nav-group group-home">
                <Link href="/">
                    <img
                        className="nav-icon nav-icon-home"
                        src={require("images/nav/ja_logo.svg")}
                    />
                </Link>
            </div>

            <nav className="nav-home">
                <Link href="work">
                    <a className="nav-link nav-link-home" id="work-nav">
                        {" "}
                        work{" "}
                    </a>
                </Link>
                <Link href="about">
                    <a className="nav-link nav-link-home" id="about-nav">
                        {" "}
                        about{" "}
                    </a>
                </Link>
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
            <Link href="#nav-toggle">
                <a
                    className="backdrop"
                    tabIndex="-1"
                    aria-hidden="true"
                    hidden
                ></a>
            </Link>
        </header>
    );
};

export default Navigation;
