import Header from "@/components/shared/Header";
import { SignedIn } from "@clerk/nextjs";
import Footer from "@/components/shared/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <div className="">
    <div className="">
      <Header></Header>
    </div>
    <div className="h-screen">{children}</div>
    <div className="">
      <Footer></Footer>
    </div>
 </div>
  );
}
