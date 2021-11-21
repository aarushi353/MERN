import {useState} from 'react';

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched; 
  let formIsValid = false;

   if(enteredNameIsValid){
     setFormIsValid(true);
   }
  
  const nameInputChangHandler = event => {
    setEnteredName(event.target.value);

    if(event.target.value.trim() == ''){
      setEnteredName(false);
      return;
    }
  }

  const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);

        if(enteredName.trim() == ''){
          setEnteredName(false);
          return;
        }
  }
   const formSubmitHandler = event => {
     event.preventDefault();

     setEnteredNameTouched(true);
     if(enteredName.trim() == ''){
       setEnteredName(false);
       return;
     }

     setEnteredNameIsValid(true);

     console.log(enteredName);
     const enteredValue = nameInputRef.current.value;
     console.log(enteredValue);

     setEnteredName('');
     setEnteredNameTouched(false);
   }
   


   const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input  onChange={nameInputChangHandler} onBlur={nameInputBlurHandler} value={enteredName} type='text' id='name' />
      {!enteredNameIsValid && <p>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
