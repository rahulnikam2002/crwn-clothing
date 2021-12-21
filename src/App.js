import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Routes, Route , useParams, Link, useNavigate, useLocation, useMatch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component.jsx'


const HatsPage = (props) => {
  const location = useLocation()
  console.log(props)
  return (
    <div>
      <h1>Hello Rahul</h1>
      <Link to = {`${location.pathname}/13`} >TO TOPIC 13 </Link>
      <Link to = {`${location.pathname}/17`} >TO TOPIC 17 </Link>
      <Link to = {`${location.pathname}/21`} >TO TOPIC 21 </Link>
    </div>
  )
}


// const HatsId = (props) => {
//   const navigate = useNavigate();
//   const location = useLocation()
//   const match = useMatch('/hats/:id')
//   console.log(match)
//   console.log(location.pathname)
//   let{ id } = useParams();
//   console.log(id)
//   return (
//     <div>
//       <Link to='/'>Home </Link>
//       <button onClick={() => navigate('/')}>Home                                                                                                           </button>
//       <h1>Hello Rahul: {id}</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
