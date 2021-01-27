
const Banner = () => (
    <section className="hero is-medium is-dark is-bold is-flex is-align-items-center">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title is-size-1" style={{color: "grey", textShadow: "-.5rem 0.25rem 0.25rem black"}}>
                    AWKWARD QUEST<span style={{color: "red", fontSize: "5.5rem"}}>&#191;</span>ON APP
                </h1>
                {/* <h2 className="subtitle p-4" style={{}}>An app that lets you generate random questions.</h2> */}
                <h2 className="subtitle pt-4" style={{}}>A depraved question provider for depraved people</h2>
                <h3 className="subtitle pt-2" style={{}}><span className="has-text-danger">Caution</span>: Must have grown hair down there to use.</h3>
            </div>
        </div>
    </section>
)

export default Banner;