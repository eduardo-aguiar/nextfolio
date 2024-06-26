import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Edu <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden xl:flex gap-8 items-center">
          <Navbar />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
