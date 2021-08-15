import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
  });

  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) => {
    data.preventDefault();
    console.log(user);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic Form</h1>
      </header>

      <section>
        <form className="input-form">
          <>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              name="fname"
              value={user.fname}
              placeholder="First Name"
              onChange={onChangeUser}
            />
          </>

          <>
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              name="lname"
              value={user.lname}
              placeholder="Last Name"
              onChange={onChangeUser}
            />
          </>

          <>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              placeholder="00-000-00000"
              onChange={onChangeUser}
            />
          </>

          <>
            <label htmlFor="email">Email-Id</label>
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="Email-Id"
              onChange={onChangeUser}
            />
          </>
        </form>

        <form className="display-form" onSubmit={onSubmit}>
          <p>
            First Name: <span>{user.fname}</span>
          </p>

          <p>
            Last Name: <span>{user.lname}</span>
          </p>

          <p>
            Phone: <span>{user.phone}</span>
          </p>

          <p>
            Email-Id: <span>{user.email}</span>
          </p>

          <input type="submit" value="SUBMIT" />
        </form>
      </section>
    </div>
  );
}

export default App;
