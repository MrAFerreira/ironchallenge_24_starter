import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ setUser }) {
  //these variables that come from the useState function are the ones that will hold the values of the input fields. We're also setting the initial values of the variables to empty strings. This is react's way of keeping track of everything and "reacting" to changes

  // the "set" functions are the ones that will change the values of the variables. This is mandatory in React if we want to listen to changes on these variables

  //Values for the name and if it's valid
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);

  //values for the email and if it's valid
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  //values for the password and all of its validations
  const [password, setPassword] = useState("");
  const [validLength, setValidLength] = useState(false);
  const [validSpecialCharacter, setValidSpecialCharacter] = useState(false);
  const [validUpperCase, setValidUpperCase] = useState(false);
  const [validLowerCase, setValidLowerCase] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  //value for the form as a whole
  const [validForm, setValidForm] = useState(false);

  const navigate = useNavigate();

  //This function should check if the name is longer than 3 characters. If it is, it returns true. If it's not, it returns false.
  function testName(value) {
    //this "value" will be whatever the user types on the name input, a string in Javascript. How could you check if the length of this string is greater than 3?
    if (value) {
      return true;
    } else {
      return false;
    }
  }

  //This function deals with the nameChange (no need to alter it). Besides saving the new value of the name, it also checks if the name is valid. If it is, it sets the value of validName to true. If it's not, it sets it to false.
  function handleNameChange(value) {
    setName(value);
    if (testName(value)) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  }

  //Same as the testName function, but for the email. It should check if the email has an "@" and a ".". If it does, it returns true. If it doesn't, it returns false.
  function testEmail(value) {
    //In this case "value" will be the email the user types in the email input. How could you check if this email "includes" an @ and .?
    if (value) {
      return true;
    } else {
      return false;
    }
  }

  // Same as the handleNameChange, no need to alter it
  function handleEmailChange(value) {
    setEmail(value);
    if (testEmail(value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  // Here we'll have all the functions to test the password. We have one function for each validation we want to test. We're using regular expressions to test the values. If you're not familiar with regular expressions, don't worry, you'll only need to change one of them. The others are already set up for you.

  //This function checks if the password has a special character. If it does, it returns true. If it doesn't, it returns false. The confusing looking array of characters you see is just a regular expression that checks for any of those characters in the string. the ".test" method is invoked with a string as a value and checks if that string matches the pattern set up by the regular expression.
  function testSpecialCharacter(value) {
    if (/[!@#$%^&*(),.?":{}|<>]/g.test(value)) {
      return true;
    } else {
      return false;
    }
  }

  //This function checks if the password has an uppercase letter. If it does, it returns true. If it doesn't, it returns false.
  function testUpperCase(value) {
    if (/[A-Z]/.test(value)) {
      return true;
    } else {
      return false;
    }
  }

  //This function should test if the password has a lowercase letter. Looking at the function above, can you guess how to do it?
  function testLowerCase(value) {
    if (value) {
      return true;
    } else {
      return false;
    }
  }

  //This function should check if the password is longer than 8 characters. If it is, it returns true. If it's not, it returns false.
  function testLength(value) {
    if (value) {
      return true;
    } else {
      return false;
    }
  }

  //This function is triggered everytime we change value of the passwod input. It will save the new value and run the validatePassword function.
  function handlePasswordChange(value) {
    setPassword(value);
    validatePassword(value);
  }

  //This function will run all the tests for the password. If all the tests pass, it will set the value of validPassword to true. If any of the tests fail, it will set the value of validPassword to false.
  function validatePassword(value) {
    //Here we call the testLength function with the password to check if it passes the test
    if (testLength(value)) {
      setValidLength(true);
    } else {
      setValidLength(false);
    }

    // Now we need to do the EXACT same thing with the rest of the tests for the password. Call the functions testSpecialCharacter, testUpperCase, and testLowerCase with the password as a parameter. If the test passes, set the value of the corresponding variable to true. If it doesn't, set it to false.

    // Finally, we're running all the functions again and if all of them return true, we set the value of validPassword to true. If any of them return false, we set it to false.
    if (
      testLength(value) &&
      testSpecialCharacter(value) &&
      testUpperCase(value) &&
      testLowerCase(value)
    ) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }

  //This function is triggered when the form is submitted. It will prevent the default behavior of the form, call the setUser function with the name, email, and password as parameters, and navigate to the /products page.
  const handleSubmit = e => {
    e.preventDefault();
    setUser({ name, email, password });
    navigate("/products");
  };

  // This useEffect function works like a listener. Every time the value of validName, validEmail, or validPassword changes we can trigger a function. In this case the function we're triggering, an anonymous one (indicated by the parentheses and arrow () => {} ), is checking if all the values are true. If they are, we set the value of validForm to true. If they're not, we set it to false.
  useEffect(() => {
    if (validName && validEmail && validPassword) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [validName, validEmail, validPassword]);

  return (
    <section id="signup">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          className={validName ? "success-border" : "error-border"}
          onChange={e => handleNameChange(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => handleEmailChange(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => handlePasswordChange(e.target.value)}
        />
        <div id="error-messages">
          <p>Must be at least 8 characters</p>

          <p>Must contain a special character</p>

          <p>Must contain an uppercase letter</p>

          <p>Must contain a lowercase letter</p>
        </div>
        <button
          type="submit"
          className={validForm ? "enabled-button" : "disabled-button"}
          disabled={!validForm}>
          Signup
        </button>
      </form>
    </section>
  );
}

export default Signup;
