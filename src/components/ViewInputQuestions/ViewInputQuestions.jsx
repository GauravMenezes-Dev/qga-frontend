import { useState, useEffect, useContext } from "react";
import swal from "sweetalert";
import {getAllQuestions, deleteQuestion} from '../../api/questions';
import {UserContext} from '../../context/userContext'
import LoginComponent from '../Login/LoginComponent';

const ViewInputQuestions = () => {

    const [user] = useContext(UserContext);

    const [qArr, setQArr] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        const runRefresh = async() => {
            await refreshQArray();
        }
        runRefresh();
        return runRefresh();
    }, [])


    const refreshQArray = async () => {
        const arr = await getAllQuestions();
        setQArr(arr);
    }

    const delQuestion = async (question) => {
        const data = await deleteQuestion(question)
        swal("Deleted Data: "+data.question)
        await refreshQArray();
    }

    const handleChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    return (
        <>
            {
                (user.username!== null)?(    
                <div className="panel m-3 shadows">
                    <p className="panel-heading has-background-dark has-text-white">
                        Submitted Questions:
                    </p>
                    <div className="panel-block">
                        <p className="control has-icons-left">
                            <input className="input" type="text" placeholder="Search" value={search} onChange={handleChange}/>
                            <span className="icon is-left">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </p>
                    </div>
                    {
                    
                        (qArr.length !== 0)?(search !== ""? qArr.filter(item => {
                                return item.question.includes(search)
                            }): qArr).map((item,i) => (
                            <div className="panel-block is-flex is-justify-content-space-between p-3" key={i}>
                                {`${item.question}`}
                                <button className="button is-dark" onClick={() => {delQuestion(item)}}>Delete</button>
                            </div>
                        )) : (
                            <div className="box"> 
                                <div className="card m-3">
                                    <div className="card-header m-3">
                                        <p className="card-header-title">It's Empty here</p>
                                    </div>
                                    <div className="card-content m-3">
                                        <div className="content">Better add some questions to liven this place up!</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    
                </div>
            ):
                <>
                    <LoginComponent />
                </>
            }
        </>
    )
}

export default ViewInputQuestions;