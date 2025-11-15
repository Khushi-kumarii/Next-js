import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar"; // ✅ import Navbar

export const metadata = {
  title: "Next.js Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <div className="main-wrapper">
          <Navbar /> {/* ✅ Add Navbar here */}

          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
