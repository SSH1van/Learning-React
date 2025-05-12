import { Navigate } from "react-router";

interface IProps {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const isAuth = false;
  return isAuth ? children : <Navigate to={"/login"} />;
}
