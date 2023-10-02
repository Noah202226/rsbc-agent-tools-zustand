import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RSBC AGENTS MANAGEMENT",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div className="drawer drawer-end">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content">
            <Navbar />
            {children}
          </div>

          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>

            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
              <div className="h-96 border-b-green-600 border-b-2">
                TOP AGENTS
              </div>
              {/* <!-- Sidebar content here --> */}
              <ul className="menu bg-base-200 w-full rounded-box">
                <li className="menu-title">More features can be add here</li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>

              <label
                htmlFor="my-drawer"
                className="btn btn-primary drawer-button absolute bottom-3 right-3"
              >
                Close
              </label>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
