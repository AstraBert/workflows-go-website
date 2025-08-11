import Image from "next/image"
import Link from "next/link"

const branding = true;

export function Footer() {
  return (
    <footer className="h-16 w-full border-t">
      <div className="text-muted-foreground flex h-full w-full flex-wrap items-center justify-center gap-4 px-2 py-3 text-sm sm:justify-between sm:gap-0 sm:px-4 sm:py-0 lg:px-8">
        <p className="text-center">
          &copy; {new Date().getFullYear()}{" "}
          <Link className="font-semibold" href={"https://workflows-go.org"}>
            workflows-go
          </Link>
          .
        </p>
        {branding && (
          <div className="hidden text-center md:block">
            <p className="text-right underline">
            <Link className="font-semibold" href={"mailto:astraberte9@gmail.com"}>
                Contact us
            </Link>
            </p>
        </div>
        )}
      </div>
    </footer>
  )
}