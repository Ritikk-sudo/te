import React from "react";
import SideBar from "@/components/SideBar/SideBar";
import Messages from "@/components/Chat-Threads/Messages";



function page() {
  return (
    <div className="bg-blue-500 min-h-screen ">
      <div className="mx-auto flex">
        {/* SIDEBAR */}
        <SideBar />

        {/* MESSAGES */}
        <Messages />
      </div>
    </div>
  );
}

export default page;
