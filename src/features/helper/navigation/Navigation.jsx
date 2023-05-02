import React from "react";
import styles from "./navigation.module.css";
import logo from "./../../assets/svg/logo.svg";
import { MdCastForEducation } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { routing } from "./../../../globalRouting";
const Navigation = ({selectUser}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    routing.to(navigate, "/login");
  };
  return (
    <div className={`${styles.NavigationBox}`}>
      <img src={logo} alt="MAA" width={"170px"} onClick={() => routing.to(navigate,'/')}/>
      <div className={`${styles.iconBox}`}>
        <div onClick={() => {
          routing.to(navigate, "/studenPlans")
        }}>
          <MdCastForEducation size={"25px"} />
          Tədris
        </div>
      </div>
      <div className={`${styles.userBox}`}>
        <span>{selectUser && selectUser.name}</span>
        <button onClick={handleLogout}>Çıxış</button>
      </div>
    </div>
  );
};

export default Navigation;
