import React from 'react'
import logo2 from '../images/logo.jpg'
import { Link } from 'react-router-dom';
import channel1 from '../images/channel1.png';
import channel2 from '../images/Screenshot 2023-10-09 114217.png';
import channel3 from '../images/Screenshot 2023-10-09 114209.png';
function Sidebar(){
    return(
        <>
        <div className='ab col-md-2'>
        <div className='logo2'>
                <i class="fa-solid fa-bars fa-2xl"></i>
                <img src={logo2} width='120'/>
        </div>
        <div className='sidebar'>
            <ul>
                <Link to="Home" style={{color:"white",textDecoration:"none"}}><li><i class="fa-solid fa-house"></i>Home</li></Link>
                <Link to="Shorts" style={{color:"white",textDecoration:"none"}}><li><i class="fa-solid fa-bolt"></i>Shorts</li></Link>
                <Link to="Maincontent" style={{color:"white",textDecoration:"none"}}><li><i class="fa-solid fa-reply"></i>MainContent</li></Link>
                <Link to="Users" style={{color:"white",textDecoration:"none"}}><li><i class="fa-regular fa-user"></i>Users</li></Link>
                <li><i class="fa-solid fa-clapperboard"></i>Subcriptions</li>
            </ul>
        </div>
        <hr></hr>
        <div className='sidebar'>
            <ul>
                <li><i class="fa-regular fa-rectangle-list"></i>Library</li>
                <li><i class="fa-solid fa-clock-rotate-left"></i>History</li>
                <li><i class="fa-regular fa-clock"></i>Watch Later</li>
                <li><i class="fa-regular fa-thumbs-up"></i>Liked Videos</li>
                <li><i class="fa-regular fa-circle-play"></i>Your Videos</li>
                <li><i class="fa-solid fa-scissors"></i>your Clips</li>
            </ul>
        </div>
        <hr></hr>
        <div className='sidebar'>
            <ul>
                <h4>Subcriptions</h4>
                <img src={channel1}></img>
                <img src={channel2}></img>
                <img src={channel3}></img>
            </ul>
        </div>
        <hr></hr>
        <div className='sidebar'>
            <ul>
                <h4>Explore</h4>
                <li><i class="fa-solid fa-fire"></i>Trending</li>
                <li><i class="fa-regular fa-bag-shopping"></i>Shopping</li>
                <li><i class="fa-solid fa-newspaper"></i>News</li>
                <li><i class="fa-solid fa-music"></i>Music</li>
                <li><i class="fa-solid fa-film"></i>Films</li>
            </ul>
        </div>
        <hr></hr>
    </div>
    </>
    );
}
export default Sidebar;