import "./globals.css";



export const metadata = {
  title: "Ecovista Weather App",
  description: "A dashboard for eco information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
