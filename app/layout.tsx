import "../styles/globals.css";
import { AnalyticsWrapper } from "../components/analytics";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-zinc-900 bg-custom-gradient">
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
