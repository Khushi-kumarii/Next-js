"use client";

export default function Navbar() {
  return (
    <nav className="navbar fade-in">
        <div
  className="nav-toggle"
  onClick={() => document.querySelector(".sidebar").classList.toggle("show")}
>
  ☰
</div>

      <h2 className="nav-title">Next.js Assignment</h2>

      <div className="nav-right">
        <span className="nav-user">👤 User</span>
      </div>
    </nav>
  );
}
