import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-muted py-4 px-4 md:px-6">
      <div className="container flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 DriveRate.io. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="text-xs hover:underline hover:text-foreground"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline hover:text-foreground"
            prefetch={false}
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline hover:text-foreground"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
