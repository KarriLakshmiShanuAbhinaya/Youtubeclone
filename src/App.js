import logo from './logo.svg';
import './App.css';
import bird from './images/image1.jpeg';
import './bootstrap/bootstrap.css';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import Home from './components/Home';
import Shorts from './components/Shorts';
import Users from './components/Users';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Maincontnet from './components/Maincontent';
import { createContext, useState } from 'react';
export const store = createContext()
function App() {
  let arr=[
    {name:"sushma",
    roll:"5N2",
    branch:"CSE"
  },
    {
      name:"abhinaya",
    roll:"5M9",
    branch:"CSE"
    },
    {
      name:"Vikas",
    roll:"5F7",
    branch:"CSE"
    }

  ];
  const [data, setData] = useState(arr)
  return (
    <>
        <BrowserRouter>
        <store.Provider value={[data, setData]}>
        <div className='container-fluid '>
          <div className='row'>
          <Sidebar/>
          <div className='col-md-10'>
          <Searchbar/>
          <Routes>
               <Route path='/Home' element={<Home/>}/>
               <Route path='/Shorts' element={<Shorts/>}/>
               <Route path='/Maincontent' element={<Maincontnet data={arr}/>} />
               <Route path='/Users' element={<Users/>}/>
           </Routes>
           </div>
          </div>
        </div>
        </store.Provider>
        </BrowserRouter>
    </>
  );
}

export default App;
