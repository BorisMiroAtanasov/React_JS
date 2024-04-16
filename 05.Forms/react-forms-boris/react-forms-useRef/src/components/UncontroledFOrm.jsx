//import { Fragment } from "react"

export default function UncontroledForm() {
    const onSubmitHandler = (e) => {
        e.preventDefault()

        const formData= new FormData(e.currentTarget);
        console.log(formData.get('username'));
        console.log(formData.get('password'));
    }
  return (
    // <Fragment> old
    <>
      <h1>Uncontroled Form</h1>

      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" id="age" />
        </div>
        <div>
          <button>Register</button>
          <button type="button">Reset</button>
        </div>
      </form>
    </>
    // </Fragment> old
  );
}
