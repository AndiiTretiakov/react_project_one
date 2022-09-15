import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'

const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

  return (
    <div className='navbar'>
        <MyButton onClick={logout}>
          Logout
        </MyButton>
        <div className='navbal__links'>
          <MyButton><Link to='/about' className='navbar__links'>About website</Link></MyButton>
          <MyButton><Link to='/posts' className='navbar__links'>Posts</Link></MyButton>
        </div>
    </div>
  )
}

export default Navbar