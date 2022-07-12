import React from 'react'

const namelist = ({ Users }) => {
    
    return (
        <div>
            {Users.map((user, index) => (
                <li className='listItem'> {user.first_name} </li>
            ))
            }
        </div>
    )
}

export default namelist