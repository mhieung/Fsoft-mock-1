/** @format */

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminScreen from "./screens/adminScreen";
import Login from "./screens/loginScreen";
import UserScreen from "./screens/userScreen";

const App = () => {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="admin" element={<AdminScreen />} />
          <Route path="user" element={<UserScreen />} />
          <Route
            index // <-- "/"
            element={<div>Default Page Content</div>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
//  <BrowserRouter>
//     <Routes>
      
//       <Route path="/" element={<App />}>
//         <Route path="expenses" element={<Expenses />} />
//         <Route path="invoices" element={<Invoices />} >
//         <Route
//         index
//         element={
//           <main style={{ padding: "1rem" }}>
//             <p>Select an invoice</p>
//           </main>
//         }
//       />
//           <Route path=":invoiceId" element={<Invoice />} /> 
//         </Route>
//         <Route
//       path="*"
//       element={
//         <main style={{ padding: "1rem" }}>
//           <p>There's nothing here!</p>
//         </main>
//       }
//     />
//       </Route>
//     </Routes>
//   </BrowserRouter>

export default App;
