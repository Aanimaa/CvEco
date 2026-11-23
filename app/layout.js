import "./globals.css";

export const metadata = {
  title: "Théo Strobbe – CV développeur",
  description:
    "CV de Théo Strobbe, étudiant en BUT Informatique à l’IUT de Lens, en recherche d’une alternance en développement informatique pour septembre 2027.",
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
