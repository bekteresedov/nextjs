import React from "react";

function Layout({ children }) {
  return (
    <html lang="eng">
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </html>
  );
}

export default Layout;
