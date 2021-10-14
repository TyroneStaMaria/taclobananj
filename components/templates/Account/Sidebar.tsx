import React from "react";
import styles from "./Account.module.scss";
import { CgProfile, CgInbox, CgBoard } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarNav}>
        <ul>
          <li>
            <CgProfile /> <span>Account</span>
          </li>

          <li>
            <CgBoard /> <span>Training Center</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
