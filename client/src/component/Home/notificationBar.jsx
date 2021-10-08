import React from "react";
import { AiOutlineClose } from "react-icons/ai";
function NotificationBar() {
  return (
    <div className="notificationBar">
      <div className="notificationBar__text">
        <p>Free Shipping on US orders over $150</p>
      </div>
      <AiOutlineClose />
    </div>
  );
}
export default NotificationBar;
