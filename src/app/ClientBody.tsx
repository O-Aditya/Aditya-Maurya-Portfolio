"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="antialiased">{children}</div>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="antialiased">{children}</div>
    </ThemeProvider>
  );
}
