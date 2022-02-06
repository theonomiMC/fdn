import React from 'react';
import User from "./User";

const Form = ({ value, select, onValueChange, handleChange, users }) => {
    return (
        <form className="form">
            <div className="form__title">
                <h2>Find Users</h2>
            </div>
            <label htmlFor="username" className='text-label'>Search</label>
            <input type='text'
                placeholder='search users ...'
                value={value}
                onChange={handleChange} name='username' />

            {/* radio buttons */}
            <div className='radio-btns'>
                <label>
                    <input
                        type="radio"
                        value="login"
                        checked={select === "login"}
                        onChange={onValueChange}
                    />
                    by login
                </label>
                <label>
                    <input
                        type="radio"
                        value="fullname"
                        checked={select === "fullname"}
                        onChange={onValueChange}
                    />
                    by name
                </label>
            </div>
            <ul>
                {
                    users && users.map(user => (
                        <li key={user.id}>
                            <User user={user} />
                        </li>
                    ))
                }
            </ul>
        </form>
    )
};

export default Form;
