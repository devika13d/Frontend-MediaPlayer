import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, getAllHistory } from '../services/allAPI'

export function Watchhistory() {
  const [history, setHistory] = useState([])
  async function Watchhistory() {
    const response = await getAllHistory();
    const { data } = response;
    console.log('watch history-----');
    console.log(data);
    setHistory(data)
  }
  useEffect(() => {
    Watchhistory()
  }, [])
  const handleDelete = async (id) => {
    await deleteWatchHistory(id);
    Watchhistory();
  }
  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <h5>Watch History</h5>
        <Link to='/home' style={{ textDecoration: 'none', color: 'white', fontSize: '15px', fontWeight: '600' }}> <i class="fa-solid fa-arrow-left me-2"></i>Back To Home</Link>
      </div>
      <table className='table container mb-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Url</th>
            <th>TimeStamp</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {
            history.length > 0 ?
              history.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.caption}</td>
                  <td>{item.embededLink}</td>
                  <td>{item.timeStamp}</td>
                  <td><button className='btn btn-danger' onClick={() => handleDelete(item.id)}><i class="fa-solid fa-trash"></i></button></td>
                </tr>
              ))
              :
              <p>No watch history found</p>
          }

        </tbody>
      </table>
    </>
  )
}

export default Watchhistory