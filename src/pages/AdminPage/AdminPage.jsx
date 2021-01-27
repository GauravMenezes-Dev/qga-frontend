import QuestionSubmitForm from "../../components/QuestionSubmit/QuestionSubmitForm"
import {useHistory} from 'react-router';
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import LoginComponent from "../../components/Login/LoginComponent";

const AdminPage = ({match}) => {

    const history = useHistory();

    const [user] = useContext(UserContext);
    
    return (
        <>
        {
            (user.username !== null)
            ?
            ( 
                <section className="section">
                    {
                        <div className="box">
                            <p className="title">Submit Question</p>
                            <QuestionSubmitForm match={match}/>
                        </div>
                    }
                    <div className="box">
                    {   
                        (user.role === "SU")?(
                            <>
                                <p className="title">View Submitted Questions: </p>
                                <div className="is-flex is-justify-content-center">
                                    <button className="button is-dark shadows" onClick={() => {history.push(`${match.path}/view`)}}>View Questions</button>
                                </div>
                            </>
                        ):(<></>)
                    }
                    </div>
                </section>   
            ): 
            (
                <LoginComponent/>
            )
        }
        </>
    )
}

export default AdminPage;