import * as express from "express";
import * as React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import App from "../shared/containers/App";
import rootReducer from "../shared/reducers";

const app = express();

const store = createStore(rootReducer);

app.use(express.static("dist"));
app.use("src/shared/assets", express.static("src/shared/assets"));

app.get("*", (req, res) => {
  const context = {};
  
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <link rel="stylesheet" href="./bundle.css">
    </head>
    <body>
      <div id="root">${content}</div>
    
      <script type="text/javascript" src="./bundle.js" defer></script>
    </body>
    </html>
  `);
});

app.listen(9999, (error: any) => {
  console.log("Server start on port: " + 9999);
});