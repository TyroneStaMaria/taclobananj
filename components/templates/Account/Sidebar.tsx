import React, { useState } from "react";
import styles from "./Account.module.scss";
import { CgProfile } from "react-icons/cg";
import { FiPlayCircle } from "react-icons/fi";

const Sidebar = () => {
  const [active, setActive] = useState("account");
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarNav}>
        <ul>
          <li
            className={active === "account" ? styles.active : ""}
            onClick={() => setActive("account")}
          >
            <CgProfile /> <span>Account</span>
          </li>
          <li className={styles.divider}></li>
          <li
            className={styles.training}
            // className={active === "training-center" ? styles.active : ""}
            // onClick={() => setActive("training-center")}
          >
            <div className="flex items-center flex-col w-full lg:flex-row ">
              <FiPlayCircle /> <span>Training Center</span>
            </div>
            <small className="lg:ml-14 text-center w-full lg:w-auto">
              Coming Soon
            </small>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
