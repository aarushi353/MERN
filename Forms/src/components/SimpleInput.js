import {useRef, useState} from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  useEffect(() => {
    if(enteredNameIsValid){
      console.log('Name Input is valid!');
    }
  }, [enteredNameIsValid]);
  
  
  
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
   }
   
   const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

   const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef}  onChange={nameInputChangHandler} onBlur={nameInputBlurHandler} value={enteredName} type='text' id='name' />
      {!enteredNameIsValid && <p>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button onClick={formSubmitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
