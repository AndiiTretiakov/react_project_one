import React, { useContext } from 'react'
import { Route, Routes, Navigate} from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/routes';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext)
  console.log(isAuth)

  if (isLoading) {
    return <Loader/>
  }

  return (
    isAuth
      ? <Routes>{ privateRoutes.map((route) => {
          return <Route path={route.path} element={<route.component/>} key={route.path} />;
            })}
          <Route path="/*" element={<Navigate to="/posts" replace />} />
      </Routes>
      : <Routes> { publicRoutes.map((route) => {
          return <Route path={route.path} element={<route.component/>} key={route.path} />;
        })}
        <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
      )
}

export default AppRouter