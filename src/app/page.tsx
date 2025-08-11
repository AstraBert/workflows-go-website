import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Footer } from "@/components/custom/footer"

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Navigation Links */}
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="https://docs.workflows-go.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>Documentation</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="https://github.com/AstraBert/workflows-go"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>GitHub</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
        
      <h1 className="mb-4 text-4xl font-bold sm:text-7xl">workflows-go</h1>
      <h2 className="text-foreground mb-8 max-w-[600px] font-bold justify-center">
        An open source implementation of event-driven workflows in Go.
      </h2>
       
      <div className="flex flex-col items-center space-y-8">
        <Image 
          src={"/icon.png"} 
          alt="A white beaver on a black background with 'workflows-go' as a footer" 
          width={500} 
          height={500}
        />
        
        <p className="text-foreground mb-8 max-w-[600px] justify-center">
        workflows-go is a package that implements <span className="font-bold">event-driven workflows</span> in <span className="font-bold">Go</span>: it is designed to build <span className="font-bold">AI applications</span> and <span className="font-bold">intelligent automation</span> leveraging the scalability and the velocity of Go.
        </p>

        <Link href={"https://docs.workflows-go.org"}>
        <Button>
          Dive into the docs!
        </Button>
        </Link>

        <Footer />
      </div>
    </section>
  )
}