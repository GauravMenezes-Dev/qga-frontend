import { useContext, useState } from "react"
import { UserContext } from "../../context/userContext";
import {login} from '../../api/user';

const LoginComponent = () => {
    
    const [setUser] = useContext(UserContext);
    const [msg, setMsg] = useState("");
    const [userInput, setUserInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const data = await login(userInput, passInput)
        setUser({
            username: data.username,
            role: data.role
        })
        setMsg(data.message);
        setIsLoading(false);
    }
    
    return (
        <>
            <section className="section">
                <div className="card m-3">
                    <div className="card-header">
                        <div className="card-header-title">You need to log in to see this page</div>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-dark" type="text" value={userInput} onChange={(e) => {setUserInput(e.target.value)}} placeholder="Username"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-dark" type="password" value={passInput} onChange={(e) => {setPassInput(e.target.value)}} placeholder="Password"/>
                                </div>
                            </div> 
                            <div className="field">
                                <div className={`control is-flex is-align-items-center is-justify-content-center ${isLoading? `is-loading`: ``}`}>
                                    <button className="button is-dark" onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                            {
                                (msg!== "")?(<div className="field">
                                    <div className="box is-align-items-center is-justify-content-center is-flex">
                                        {msg}
                                    </div>
                                </div>):(<></>)
                            }       
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginComponent;