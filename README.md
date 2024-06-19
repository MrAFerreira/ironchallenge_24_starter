# IronChallenge 2024

---

As a freshly graduated student and newest hire for Ironhack's internal team, you were tasked with fixing some issues with the IronMerch portal. It's been abandoned for some time in favor of an exccel sheet. Time to change that!

## The goal

The goal of this challenge is to fix the signup page and spruce up the Products page. To accomplish this you will use React, which joins HTML, CSS and Javascript!
The challenge is divided into smaller tasks that will guide you through your goal. After you finish the functional part of the application, you're free to style it as you want!
Don't worry if you don't finish everything! The main goal after all is to learn something and enjoy your time. You will have access to a solution at the end.

## Tech used

This challenge is using React, a frontend framework that allows you to create highly dynamic webpages using Javascript to control not only the logic of the application but also it's styles.
It's okay if you're not familiar with React tough, the main parts of this challenge will focus on **logic** and **style**, if you know a bit og html, css and Javascript, you're good to go.

## Template

You'll start with some code already. It mainly consists of an _App.js_, the entrypoint of our application, three pages (Home, Signup and Products), a component (Navbar) and some styles.
Inside these files there will be code that deals with some part of the logic and that you can use as a base for the smaller challenges.

## Challenges

### 1 - Signup page

The signup page isn't exactly working. We have some inputs but the validation seems to be completely off. It's preventing us from submiting the form. Let's try to fix it!

#### 1.1 - testName

There's a function called `testName` that will check the name (a string) typed on the name input. We need this function to check if the value has _more than_ 3 characters.

#### 1.2 - testEmail

Similarly, there's a function called `testEmail` that will check the email (a string) typed on the email input. We need this function to check if the value _includes_ the characters `@` and `.`

#### 1.3 - test password functions

There are a couple of functions that will test the password for diffeent criteria. The `testSpecialCharacter` and `testUpperCase` functions are already complete and can serve as an example.

##### 1.3.1 - testLowerCase

This function should check if there's any lowercase characters present. Look at the function above to see how it might work.

##### 1.3.2 - testLength

You've done this one before! For the password we just need to check if it has _at least_ 8 characters.

#### 1.4 - Give the user some feedback!

With everything you did so far, the inputs should now be testing the values typed and we can use those values (the validName, validEmail and validPassword) to change some things on the page.

You can see that the name input changes it's border color when the name is valid. We want to do the same for the email and password inputs.

The logic for all of this is already in place on the name input (remember how to use class names in React), you just need to copy it for the other inputs, and while you're at it, change the color of the borders on the CSS file, the current ones don't seem to be the best choice.

#### 1.5 - What about the text ?

Besides the borders, we also have some text below the password input that should show the user if the requirements are being met. Using the same thought process, we can change the color of the text depending if it's respective test is passing or not.

There's already an `error` and `success` class that you can apply to the `p` tags.

**Bonus**: Besides changing the text color, try to add a `✔` or `✘` before the text to show if it's passing or not.

### Signup done!

If everything went well you should have the signup page working as intended and when you submit the form you should go to the Products page.
You can continue on with the challenge for the second part, or, if you're feeling confident, you can apply a bit more styling!

### 2 - Products page

The product page also has a couple more things to fix, but you're more than ready for it at this point!

#### 2.1 - Products not showing

We have a JSON file with some products that we're importing to the `Products.jsx` file. You should use this variable to _set_ the state of the value of the `products` variable. (Hint: we need to substitute the placeholder empty array)

#### 2.2 - Display more information

Now that we can map over the products and show them on the page we should display more information about them, just their `ID` isn't very useful. Check how that is being done and do the same for the `name`, `price` and `color` of the products.
**Bonus (hard)**: Since the color is represented as an hex code, try to display a colored square next to the color name. Leave this for last, it's a bit more complicated.

#### 2.3 - Filtering

With the table showing the products, now we should add a way to filter them using the search box above it.
There's a variable called `filteredProducts` that currently is just a copy of `products`. It should be used to store the products whose names match the `search` variable (this variable will have the value of whatever is being typed on the input), so if you type **key** only the **Keychain** product row should appear . This one might seem a bit more complex but always try to break things down into smaller parts!

### Main challenges done!

With the signup page working and the products page showing the products and filtering them, you're done with the main challenges of this project. You can now style the pages as you see fit, add more features or even try to fix some of the bonus challenges!

### 3 - Bonus

You might have seen a `user` variable around the code. This variable is being used as a placeholder for authentication, it stores the name, email and password that we set on the `Signup` page and it controls the access to the `Products` page.

Looking at all that you've done so far and the code already present in the application, try to add a message on the `Navbar.jsx` component that says "Welcome, username" if a user exists, while at the same time hiding the `Signup` link if the user is logged in.
This is a common practice in web development, where we show different things depending on the user's state.
