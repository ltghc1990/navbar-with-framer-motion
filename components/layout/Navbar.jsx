import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b-2">
      <Link href="/">
        <a className="btn">Home</a>
      </Link>
    </div>
  );
};

export default Navbar;
