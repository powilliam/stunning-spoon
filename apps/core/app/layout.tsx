import { CardProvider } from "@/app/contexts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <CardProvider>{children}</CardProvider>
      </body>
    </html>
  );
}
