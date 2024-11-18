import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "",favCar:"" });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  function submitHandler(event){
    event.preventDefault();
    //print
    console.log("Finally printing the entire form ka data ....")
    console.log(formData)
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <br />
        <br />
        <input type='text'
          placeholder='first name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
        />
        <br />
        <br />
        <input type='text'
          placeholder='last name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />
        <br />
        <br />
        <input
          type='email'
          placeholder='Enter your email here'
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          placeholder='enter your comments here'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />
        <br />
        <br />
        <input
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am I visible?</label>
        <br />
        <br />
        <fieldset>
          <legend>Mode:</legend>
          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="Online Mode"
            id='Online-Mode'
            checked={formData.mode === "Online Mode"}
          />
          <label htmlFor='Online-Mode'>Online Mode</label>
          <br />
          <br />
          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="Offline Mode"
            id='Offline-Mode'
            checked={formData.mode === "Offline Mode"}
          />
          <label htmlFor='Offline-Mode'>Offline Mode</label>
        </fieldset>
        <br />
        <br />
        <label htmlFor='favCar'>Tell me your Favourite Car </label>

        <select
          onChange={changeHandler}
          name='favCar'
          id='favCar'
          value={formData.favCar}
        >
          <option value="Scarpio">Scarpio</option>
          <option value="fartuner">fartuner</option>
          <option value="Tharrr">Tharrr</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
        </select>
        <br />
        <br />
        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
