import React, { useState } from 'react'
import Add from '../components/Add'
import Category from '../components/Category'
import View from '../components/View'
import Videocard from '../components/Videocard'
import { useNavigate } from 'react-router-dom'
function Home() {
  //useNavigate():it is used to nabvigate from one page to another
  const navigateByUrl=useNavigate()
  //craete a state for state lifting
  const [uploadVideoStatus,setUploadVideoStatus]=useState({})
  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between align-item-center'>
        <div className='add_videos'>
          <Add setUploadVideoStatus={setUploadVideoStatus}/>
        </div>
        <div>
          <h3 style={{ fontSize: "30px" ,cursor:'pointer'}} onClick={()=>navigateByUrl('/watch')}> Watch history</h3>
        </div>
      </div>
      <div className='container mt-5 mb-5 d-flex justify-content-between align-item-center'>
        <div className='col-md-6 mt-5'>
          <h4>All Videos</h4><br />
          <View uploadVideoStatus={uploadVideoStatus}/>
        </div>
        <div>
          <Category />
        </div>
      </div>
      {/* 
   
    <Videocard/> */}
    </>
  )
}

export default Home