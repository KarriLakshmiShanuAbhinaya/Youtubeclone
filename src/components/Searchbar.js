import React from 'react'

function Searchbar(props) {
    return (
      <>
          <div className='row'>
              <div className='col-md-2'>
              </div>
              <div className='col-md-7 color'>
                  <input type='text'className='search' placeholder='  Search...'/>
                  <button className='searchico btn'><i class="fa-solid fa-magnifying-glass"></i></button>
                  <button className='mic btn justify-content-center'><i class="fa-solid fa-microphone"></i></button>
              </div>
              <div className='col-md-3 float-end'>
              <button className='create float-end'><i class="fa-solid fa-circle-user"></i></button>
              <button className='create float-end'><i class="fa-regular fa-bell"></i></button>
              <button className='create float-end'><i class="fa-regular fa-square-plus"></i></button>
  
              </div>
          <hr></hr>
          <div className='menu'>
            <ul>
              <li>All</li>
              <li>Tamil cinema</li>
              <li>Music</li>
              <li>Korean dramas</li>
              <li>Mixes</li>
              <li>Jabardasth</li>
              <li>Live</li>
              <li>News</li>
              <li>Recently uploaded</li>
              <li>New to you</li>
              <li>New to you</li>
            </ul>
          </div>
          <div className='row'>
            <div className='col-md-3 menu1'>
            <h1>{props.name}</h1>
            </div>
          </div>
          </div>
          
      </>
    );
  }
  export default Searchbar;

