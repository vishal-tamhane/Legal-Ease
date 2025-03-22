
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png"
import logo1 from "../assets/logolight.png"
import { Menu, X, FileText, Calendar, User, Home, MessageCircle } from "lucide-react";

const links = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: FileText },
  { name: "Cases", href: "/cases", icon: Calendar },
  { name: "LegalAI", href: "/chat", icon: MessageCircle },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-white/80 dark:bg-justice-900/80 backdrop-blur-lg shadow-sm"
          : "py-6 px-2 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight flex items-center space-x-2"
        >
          <img src={logo1} alt="logo" width="35px" className="block dark:hidden" />
          <img src={logo} alt="logo" width="35px" className="hidden dark:block" />


          <span className="text-justice-800 pl-2 dark:text-white">Legal Ease</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === link.href
                ? "bg-primary text-primary-foreground"
                : "text-foreground/80 hover:text-foreground hover:bg-secondary/80"
                }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="ml-2">
            <ThemeToggle />
          </div>

          <Button asChild className="ml-2">
            <Link to="/auth">Sign In</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-full"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-justice-900 shadow-md animate-slideUp">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-3 rounded-md flex items-center space-x-3 ${location.pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-secondary/80"
                  }`}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
              </Link>
            ))}
            <Button asChild className="w-full mt-2">
              <Link to="/auth">Sign In</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
