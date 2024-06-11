import React from "react";
import { Toaster } from "react-hot-toast";

const ToasterMessage = () => {
  return (
    <Toaster
      position="bottom-center"
      gutter={12}
      containerStyle={{
        margin: "8px",
      }}
      toastOptions={{
        success: {
          style: {
            background: "var(--color-green-700)",
            color: "white",
          },
          duration: 3000,
        },
        error: {
          style: {
            background: "var(--color-red-700)",
            color: "white",
          },
          duration: 5000,
        },
        style: {
          fontSize: "1.6rem",
          padding: "1.6rem 2.4rem",
          borderRadius: "7px",
        },
      }}
    />
  );
};
export default ToasterMessage;
