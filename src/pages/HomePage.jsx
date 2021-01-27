import { useState } from "react";
import Introduction from "../components/Introduction/Introduction";
import {genRandomQuestion} from "../api/questions";

const HomePage = () => {

    const [curQues, setCurQues] = useState("The depraved question comes here. (Warning: Come only when you understand what \"Blue Waffle\" is)")

    const genDepravedQuestion = async() => {
        const data = await genRandomQuestion();
        setCurQues(data.question);
    }

    return (
        <>
            <Introduction/>
            <section className="section">
                <div className="tile is-ancestor box has-background-dark">
                    <div className="tile is-parent">
                        <div className="tile is-child is-flex is-align-items-center is-justify-content-center">
                            <p className="title has-text-primary">{curQues}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container is-flex is-align-items-center is-justify-content-center">
                    <button 
                        className="button is-dark" 
                        style={{boxShadow: "0.1rem 0.1rem black"}}
                        onClick={genDepravedQuestion}
                        >
                            Generate depraved questions
                    </button>
                </div>
            </section>
        </>
    )
}


export default HomePage;