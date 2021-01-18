import CaseStudyLink from "components/case-study-link";

export const FooterWave = ({ side }) => {
    return (
        <div className="work-footer-wave" id={`footer-wave-${side}`}>
            <img src={require(`images/work/template/work-wave-${side}.svg`)} />
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

            <FooterWave side="left" />
            <FooterWave side="right" />
        </footer>
    );
};

export default CaseStudyFooter;
