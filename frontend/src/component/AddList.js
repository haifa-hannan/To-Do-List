import {useState} from 'react';
import "./add.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddList = () => {
  const [title,setTitle] = useState('');
  const history = useHistory();

  const saveList = async(e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000', {
      title: title
    })
  }
  function refreshPage() {
    window.location.reload(true);
  }

  return(
    <div className='container3'>
      <div className='centeradd'>
      <form className='form-block' onSubmit={ saveList }>
        <div className='form'>
          <input 
            type="text" 
            placeholder='Masukkan Plan' 
            name='title' 
            className='form-control'
            value={title}
            onChange={ (e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <button className='btn' onClick={refreshPage} type='submit'>Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default AddList;