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

  //This function is checking if the name is longer than 0 characters. If it is, it returns true. If it's not, it returns false.
  function testName(value) {
    if (value.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  //This function deals with the nameChange. Besides saving the new value of the name, it also checks if the name is valid. If it is, it sets the value of validName to true. If it's not, it sets it to false.
  function handleNameChange(value) {
    setName(value);
    if (testName(value)) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  }

  //Same as the testName function, but for the email. It checks if the email has an "@" and a ".". If it does, it returns true. If it doesn't, it returns false.
  function testEmail(value) {
    if (value.includes("@") && value.includes(".")) {
      return true;
    } else {
      return false;
    }
  }

  function handleEmailChange(value) {
    setEmail(value);
    if (testEmail(value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  // Here we'll have all the functions to test the password. We have one function for each validation we want to test. We're using regular expressions to test the values. If you're not familiar with regular expressions, don't worry.

  function testLength(value) {
    if (value.length > 6) {
      return true;
    } else {
      return false;
    }
  }

  function testSpecialCharacter(value) {
    if (/[!@#$%^&*(),.?":{}|<>]/g.test(value)) {
      return true;
    } else {
      return false;
    }
  }

  function testUpperCase(value) {
    if (/[A-Z]/.test(value)) {
      return true;
    } else {
      return false;
    }
  }

  function testLowerCase(value) {
    if (/[a-z]/.test(value)) {
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
    if (testLength(value)) {
      setValidLength(true);
    } else {
      setValidLength(false);
    }

    if (testSpecialCharacter(value)) {
      setValidSpecialCharacter(true);
    } else {
      setValidSpecialCharacter(false);
    }

    if (testUpperCase(value)) {
      setValidUpperCase(true);
    } else {
      setValidUpperCase(false);
    }

    if (testLowerCase(value)) {
      setValidLowerCase(true);
    } else {
      setValidLowerCase(false);
    }

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
          className={validEmail ? "success-border" : "error-border"}
          onChange={e => handleEmailChange(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          className={validPassword ? "success-border" : "error-border"}
          onChange={e => handlePasswordChange(e.target.value)}
        />
        <div id="error-messages">
          <p className={validLength ? "success" : "error"}>
            {validLength ? " ✔ " : "✘ "}
            Must be at least 8 characters
          </p>

          <p className={validSpecialCharacter ? "success" : "error"}>
            {validSpecialCharacter ? " ✔ " : "✘ "}
            Must contain a special character
          </p>

          <p className={validUpperCase ? "success" : "error"}>
            {validUpperCase ? " ✔ " : "✘ "}
            Must contain an uppercase letter
          </p>

          <p className={validLowerCase ? "success" : "error"}>
            {validLowerCase ? " ✔ " : "✘ "}
            Must contain a lowercase letter
          </p>
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
