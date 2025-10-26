import AddBootstrap from '../components/AddBootstrap';
import FontAwesomeSetup from '../components/FontAwesomeSetup';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "../styles/main.scss";

export const metadata = {
  title: "ADZU Formation System - Faculty Formation Program Monitoring and Management System",
  description: "Created by ADZU BSCS-3 Students (2025-2026 School Year)",
   icons: {
    icon: "/Images/adzu-logo-outline.png",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <AddBootstrap /> {/* Importing Bootstrap Js to Client */}
        <FontAwesomeSetup /> {/* Importing Font Awesome to Client */}
        {children}
      </body>
    </html>
  );
}
