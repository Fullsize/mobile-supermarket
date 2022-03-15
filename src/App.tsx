import React from "react";
import { Routes, Route } from 'react-router-dom';
import routes from "./routes";
const App = () => {
  const renderRoute = (data: any) => {
    return data.map((item: any) => {
      if (item.children) {
        return <Route
          key={item.path}
          path={item.path}
          index={item.index}
          element={<item.view />}
        >
          {renderRoute(item.children)}
        </Route>
      }
      return <Route
        key={item.path}
        path={item.path}
        index={item.index}
        element={<item.view />}
      />
    })
  }
  return (
    <Routes>
      {renderRoute(routes)}
    </Routes>
  )
}
export default App;