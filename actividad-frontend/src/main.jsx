import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "normalize.css";
import "./global.css";
import { ChakraProvider } from "@chakra-ui/react";

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('../mocks/browser')
  worker.start()
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
