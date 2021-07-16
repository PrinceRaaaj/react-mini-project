import { useState } from 'react';
import './App.css';
import UserDetail from "./components/userDetail"
import UsersTable from "./components/usersTable"
import {Dropdown} from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"



function App() {

    const [ selectType, setSelectType ] = useState("selectOne")
    const [ userId, setUserId ] = useState("")
    const [ showUserDetail, setShowUserDetail ] = useState(false)

    return (
        <Router>
            <div className="App row">
                <div className="col-sm-6 d-flex vh-100 flex-column justify-content-center align-items-center">
                    <Dropdown className="w-50 mb-3">
                        <Dropdown.Toggle className="btn-warning w-100" variant="success" id="dropdown-basic">Select One</Dropdown.Toggle>
                        <Dropdown.Menu className="w-100">
                            <Dropdown.Item href="/">Select One</Dropdown.Item>
                            <Dropdown.Item href="/allUsers">Get All user Data</Dropdown.Item>
                            <Dropdown.Item href="" onClick={() => setSelectType("getSingleUserData")}>Get single user data</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {
                        selectType === "getSingleUserData"
                        &&
                        <div className="container d-flex p-0 w-50">
                            <input type="text" className="flex form-control" placeholder="Input User Id" value={userId} onChange={e => {setUserId(e.target.value);setShowUserDetail(false) }} />
                            <button type="button" className="ml-1 btn btn-success" onClick={() => userId ? window.location.pathname=`/user/${userId}`: ""}>Submit</button>
                        </div >
                    }
                </div>
                <div className="col-sm-6 d-flex vh-100 flex-column  justify-content-center align-items-center">
                        <Switch>
                            <Route exact path="/"></Route>
                            <Route path="/allUsers"><UsersTable /></Route>
                            <Route exact path="/user/:userId"><UserDetail /></Route>
                        </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App