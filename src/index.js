import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { ClerkProvider} from '@clerk/clerk-react';
// const publishableKey = process.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!publishableKey) {
//   throw new Error("Missing Publishable Key")
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ClerkProvider publishableKey={publishableKey}> */}

    <App />
    {/* </ClerkProvider> */}
  </React.StrictMode>
);
