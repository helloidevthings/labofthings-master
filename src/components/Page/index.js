import Head from "next/head";
import React, { Component } from "react";
import Header from "../Header";

const Page = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default Page;
