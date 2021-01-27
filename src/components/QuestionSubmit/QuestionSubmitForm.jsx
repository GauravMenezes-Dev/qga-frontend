import { useState } from "react";
import { useHistory } from "react-router";
import swal from "sweetalert";
import { submitQuestion } from "../../api/questions";
import './QuestionSubmitForm.css'

 const QuestionSubmitForm = ({match}) => {
    const history = useHistory();
    const matchVal = match.path;
    const [question, setQuestion] = useState("")
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setQuestion(e.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        const data = await submitQuestion(
            {
                question: question
            }
        );
        setSubmitting(false);     
        swal("Posted: "+data.question);
        history.push(`${matchVal}/view`);
    }

    const Back = (event) => {
        event.preventDefault();
        history.goBack();
    }

    return (
        <form>
            <div className="field p-3">
                <label className="label pb-4">Submit a Question: </label>
                <input type="text" className="input" placeholder="Psst! Input question here!" value={question} onChange={handleChange}/>
            </div>
            <div className="field is-grouped is-grouped-centered pt-2">
                <div className="control is-flex is-justify-content-space-between">
                    <button className={`button is-dark shadows mx-2 ${submitting? `is-loading`: ``}`} disabled={submitting} onClick={handleSubmit}>
                        Submit
                    </button>
                    <button className="button is-primary shadows mx-2" onClick={Back}>Back</button>
                </div>
            </div>
        </form>
    )
 }

 export default QuestionSubmitForm;