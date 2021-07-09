import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//  nextjs automatically looks for a 404 page and will render it instead of the default
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });
  return (
    <div>
      <h1>404</h1>
      <h2>Ooops! That page cannot be found{`:(`}</h2>
      <p>
        Redirecting to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
