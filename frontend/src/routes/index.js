import React, { useState } from "react";
import { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import Header from "../components/header/header";
import CreatePost from "./createPost/createPost";
import Home from "./home/home";
import SearchPost from "./search/search";
import UpdatePost from "./updatePost/updatePost";
import ViewPost from "./viewPost/viewPost";

const Router = () => {
  return (
    <>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/post/view/:id" component={ViewPost} />
      <Route exact path="/post/create" component={CreatePost} />
      <Route exact path="/post/update/:id" component={UpdatePost} />
      <Route exact path="/post/search" component={SearchPost} />
    </>
  );
};

export default Router;
