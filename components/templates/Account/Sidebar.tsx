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

          <li
            className={active === "training-center" ? styles.active : ""}
            onClick={() => setActive("training-center")}
          >
            <FiPlayCircle /> <span>Training Center</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
