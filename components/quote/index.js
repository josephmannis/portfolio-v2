const QuoteRule = ({ isEnd }) => {
    return (
        <div className="quote-rule">
            <hr />
            <img
                className={`quote-image ${isEnd ? "quote-image-end" : ""}`}
                src={require("images/work/template/quote.svg")}
            />
            <hr />
        </div>
    );
};

const Quote = ({ text }) => {
    return (
        <>
            <QuoteRule />
            <div className="quote">{text}</div>
            <QuoteRule isEnd />
        </>
    );
};

export default Quote;
