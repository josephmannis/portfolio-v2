import CaseStudyLink from "components/case-study-link";

const FooterWave = ({ side }) => {
    return (
        <div className="wave-container" id={`footer-wave-${side}`}>
            <img
                className="work-footer-wave"
                src={require(`images/work/template/work-wave-${side}.svg`)}
            />
        </div>
    );
};

const CaseStudyFooter = ({ previous, next }) => {
    return (
        <footer className="work-footer">
            <div className="project-link-container">
                {previous && (
                    <CaseStudyLink
                        url={previous}
                        title="previous project"
                        id="previous-link"
                    />
                )}
                {next && (
                    <CaseStudyLink
                        url={next}
                        title="next project"
                        id="next-link"
                    />
                )}
            </div>

            <div className="wave-group">
                <FooterWave side="left" />
                <FooterWave side="right" />
            </div>
        </footer>
    );
};

export default CaseStudyFooter;
