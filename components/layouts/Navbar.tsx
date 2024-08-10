import Link from "next/link";

export function Navbar() {
  return (
    <header className="bg-primary px-4 py-6 md:px-6">
      <div className="container flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <CarIcon className="h-8 w-8 text-primary-foreground" />
          <span className="text-2xl font-bold text-primary-foreground">
            DriveRate
          </span>
        </Link>
        <p className="hidden text-sm font-medium text-primary-foreground md:block">
          Get your car insurance rate in seconds
        </p>
      </div>
    </header>
  );
}

function CarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}
