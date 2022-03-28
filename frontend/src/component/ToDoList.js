import React, {useState, useEffect} from "react";
import { Checkbox } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
import "./add.css";
import del from "./delete.png";
import update from "./update.png";
import AddList from "./AddList";


const ToDoList = () => {

    const [todo, setTodo] = useState([]);

    useEffect(()=> {
        getTodo();
    }, []);

    const getTodo = async() =>{
        const response = await axios.get('http://localhost:5000');
        setTodo(response.data);
    }

    const deleteList = async(id) => {
        await axios.delete(`http://localhost:5000/${id}`);
        getTodo();
    }

    return(
        <div className="container">
                <AddList/>
                <table className="tabel">
                    <tbody className="tbody">
                        { todo.map((todo, index) =>(
                            <tr key={todo.id}>
                                
                                <td className="tdata theader">
                                    <div className="kotak">
                                    
                                        <div className="table-div title">
                                            <p>{ todo.title }</p>
                                            
                                        </div>
                                    </div>
                                    <div className="table-div action">
                                        <Checkbox
                                            type ="checkbox"
                                        />
                                        <Link to={`/edit/${todo.id}`} className="button"><img className="update icon" src={update}/></Link>
                                        <Link onClick={ () => deleteList(todo.id) } className="button"><img className="del icon" src={del}/></Link>
                                    </div>
                                </td>
                            </tr>
                        )) }
                        
                </tbody>
            </table>
        </div>
    );
}


export default ToDoList;
