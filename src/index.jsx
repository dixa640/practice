import React from "react";
import ReactDOM from "react-dom/client";

function Index() {
  return (
    <h1>hello world</h1>,
    <p>This is a simple React app.</p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
export default Index;