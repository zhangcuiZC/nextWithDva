import React, { Component } from "react";
import Head from "./Head";

export default ({ children }) => (
    <div>
        <Head />
        {children}
    </div>
);
