import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../services/user/user.service";
import { setUser } from "../../store/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";

interface UserProps {}

const User: React.FC<UserProps> = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const navigate = useNavigate();
  console.log(user, "user");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const values = { firstName, lastName };
    console.log(values, "values");
    try {
      await updateUser(values, user.token);
      const getUserData = await getUser(user.token);
      setFirstName(values.firstName);
      setLastName(values.lastName);
      dispatch(
        setUser({
          firstName: values.firstName,
          lastName: values.lastName,
          email: getUserData.email,
          token: user.token,
        })
      );
      setShowForm(false);
    } catch (error) {
      console.log(error?.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!user.token) {
      navigate(routes.LOGIN);
    }
  }, [firstName, lastName]);

  console.log(showForm);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {!showForm ? `${user.firstName} ${user.lastName}` : ""}
        </h1>
        {showForm && (
          <form onSubmit={onSubmit}>
            <div className="edit">
              <div className="input-wrapper">
                <label htmlFor="firstName">Firstname</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastName">Lastname</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="edit-button"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
            <button type="submit" className="edit-button">
              Save
            </button>
          </form>
        )}
        {!showForm && (
          <button
            className="edit-button"
            onClick={() => setShowForm(!showForm)}
          >
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default User;
