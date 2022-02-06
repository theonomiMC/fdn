import React from 'react';

const User = ({ user }) => {
    return (
        <div className='list-item'>
            <img src={user?.avatar_url} alt={user.name} />
            <h3>
                <a href={user?.html_url} target='_blank' rel="noreferrer">
                    {user.login}
                </a>
            </h3>

        </div>
    )
};

export default User;
