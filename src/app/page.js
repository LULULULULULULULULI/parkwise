"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar.js";
import Listings from "./listings.js";
import About from "./about.js";

// import MyAccount from "./myAccount.js";

// import SignupPage from "./signup.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ListingComponent = Listings();

export default function Home() {
  return (
    <main className={styles.main}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={Home} />
          <Route path="/about" element={<About />} />
          <Route path="/listings" element={ListingComponent} />
          {/* <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/myaccount" element={<MyAccount />} /> */}
        </Routes>
      </Router>
    </main>
  );
}
