import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const {user}=useContext(AuthContext)

    if (user) {

        return children;
    }

  return <Navigate to='/signin'></Navigate>
}
PrivateRoute.propTypes ={
  children:PropTypes.node
}