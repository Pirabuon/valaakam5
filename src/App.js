import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import CategoryPosts from "./pages/CategoryPosts";
import science from "./pages/science";
import puzzles from "./pages/puzzles";
import abnormal from "./pages/abnormal";
import scholars from "./pages/scholars";
import history from "./pages/history";
import mystery from "./pages/mystery";
import others from "./pages/others";
import brief from "./pages/brief";

import "./styles.css";
import Navbar from "./components/navbar.js";

import { ApolloProvider } from "@apollo/client/react";
import client from "./lib/apollo";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <swiperCP />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blog/:slug" component={PostPage} />
        <Route path="/CategoryPosts/:slug" component={CategoryPosts} />
        <Route path="/brief/" component={brief} />
        <Route path="/science/" component={science} />
        <Route path="/puzzles/" component={puzzles} />
        <Route path="/abnormal/" component={abnormal} />
        <Route path="/scholars/" component={scholars} />
        <Route path="/history/" component={history} />
        <Route path="/mystery/" component={mystery} />
        <Route path="/others/" component={others} />
      </Switch>
    </ApolloProvider>
  );
}
