import React,{useState,useEffect} from 'react'
import axios from 'axios'
import User from './User'

const UsersList = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res)
            setUsers(res.data)
        })
        .catch((error) => console.log(`Error : ${error}`))
    })
    return (
        <div className='UsersList'>
            {users.map(user=>(
                <User key={user.id} user={user}/>
            ))}
            
        </div>
    )
}

export default UsersList

