import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import OnlyAdminPrivateRoutes from "./components/OnlyAdminPrivateRoutes";
import ScrollToTop from "./components/ScrollToTop";
import FooterCom from "./components/FooterCom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Messages from "./pages/Messages";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import UpdatePost from "./pages/UpdatePost";
import CreateContent from "./pages/CreateContent";
import ViewVideo from "./pages/ViewVideo";
import ImpactMissionPage from "./pages/ImpactMissionPage";
import Search from "./pages/Search";
import HeaderComponent from "./components/HeaderComponent";
import Publications from "./pages/Publications";
import AboutUs from "./pages/AboutUs";
import AuthenticationPage from "./pages/AuthenticationPage";
import Announcements from "./pages/Announcements";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/search" element={<Search />} />
        <Route path="/impact-missions" element={<ImpactMissionPage />} />
        <Route path="/view-video/:videoId" element={<ViewVideo />} />
        <Route path="/authentication" element={<AuthenticationPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoutes />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/create-content" element={<CreateContent />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route path="/posts/:postSlug" element={<PostPage />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}
