
const Introduction = () => {
    return (
        <section className="section">
            <div className="tile is-ancestor box">
                <div className="tile is-parent">
                    <div className="tile is-child is-flex-column is-align-items-center is-justify-content-center">
                        <p className="title">What is this app anyway?</p>
                        <p className="subtitle">My friends and I play a game while drunk to ask really random and awkward questions which everyone has to answer. So I made a small app for that.</p>
                    </div>                              
                </div>
                <div className="tile is-parent">
                    <div className="tile is-child is-flex-column is-align-items-center is-justify-content-center">
                        <p className="title">So how does this work?</p>
                        <p className="subtitle">It's pretty simple. Just click the Generate a Question button and get an awkward question. Everyone has to answer it truthfully (no exceptions!) or take another shot. 

The game works better when you're at least three shots down.</p>
                    </div>  
                </div>
            </div>          
        </section>
    )
}

export default Introduction;