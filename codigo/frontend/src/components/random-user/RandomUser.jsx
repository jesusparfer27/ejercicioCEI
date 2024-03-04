import { useEffect, useState } from 'react'
import './RandomUser.css'

function RandomUser() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const controller = new AbortController();
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: controller.signal,
        };
  
        try {
          const response = await fetch('https://randomuser.me/api/?results=10', options);
          const data = await response.json();
          setUsers(data.results); // Corregida esta línea
        } catch (error) {
          console.log(error);
        } finally {
          controller.abort();
        }
      };
      fetchData();
    }, []);
  
    return (
      <>
        <h1>Random User</h1>
        <ul>
          {users.map((user) => (
            <li key={user} className='userbloque'>{user.name.first} <span>&nbsp;&nbsp;{user.name.last}</span>
            <div><p>{user.url}</p></div>
            <img src={user.picture.large} className='imagenuser' alt="image" />
            </li>
          ))}
        </ul>
      </>
    );
  }
  

export default RandomUser