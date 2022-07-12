import React from 'react'

const Table = ({ data }) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>name</th>
                        <th>surname</th>
                        <th>eamil</th>
                    </tr>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table