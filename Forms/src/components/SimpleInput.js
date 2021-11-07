import {useRef, useState} from 'react';




const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  
  const nameInputChangHandler = event => {
    setEnteredName(event.target.value)
  }
   const formSubmitHandler = event => {
     event.preventDefault();


     console.log(enteredName);
     const enteredValue = nameInputRef.current.value;
     console.log(enteredValue);

     setEnteredName('');
   }

  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name' onChange={nameInputChangHandler} value={enteredName}>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' />
      </div>
      <div className="form-actions">
        <button onClick={formSubmitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
