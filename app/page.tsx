import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'

const tools = [
 {
   name: "Nmap",
   description: "Network scanning and discovery tool",
   summary: "Powerful open-source tool for network exploration and security auditing.",
   link: "/tools/nmap",
   image: "https://upload.wikimedia.org/wikipedia/fr/7/7e/LOGO_Nmap.jpg"
 },
 {
   name: "Wireshark",
   description: "Network protocol analyzer",
   summary: "Widely-used network protocol analyzer for detailed packet inspection.",
   link: "/tools/wireshark",
   image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wireshark-HAEgbwSFhK5xVJed50ZXqqmcvLlgqc.jpeg"
 },
 {
   name: "Metasploit",
   description: "Penetration testing framework",
   summary: "Comprehensive platform for developing, testing, and executing exploit code.",
   link: "/tools/metasploit",
   image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metasploit.jpg-AwjnQlv86Gp92WjIjH6VHE83RgsrNe.jpeg"
 },
 {
   name: "Hydra",
   description: "Password cracking tool",
   summary: "Fast and flexible password cracking tool supporting various protocols.",
   link: "/tools/hydra",
   image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hydra-tV3x2fI4DWhjVFpz6ASW9XiF7bbshr.png"
 },
]

export default function Page() {
 return (
  <div className="space-y-12">
   <section className="text-center space-y-4 py-12">
     <Image
       src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20125943-w0XItz8xcvV96yZXDMKIiOzZJ3cX21.png"
       alt="Golden Cipher Logo"
       width={120}
       height={120}
       className="mx-auto w-auto h-[120px]"
       priority
     />
     <h1 className="text-4xl font-bold">Welcome to Golden Cipher</h1>
     <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
       Your trusted partner in advanced cybersecurity solutions
     </p>
     <Button asChild size="lg">
       <Link href="/tools">
         Explore Our Tools <ArrowRight className="ml-2 h-4 w-4" />
       </Link>
     </Button>
   </section>

   <section>
     <h2 className="text-3xl font-semibold mb-6 text-center">Featured Tools</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
       {tools.map((tool) => (
         <Card key={tool.name}>
           <CardHeader>
             <CardTitle>{tool.name}</CardTitle>
             <CardDescription>{tool.description}</CardDescription>
           </CardHeader>
           <CardContent className="space-y-4">
             <div className="relative w-full h-[200px]">
               <Image
                 src={tool.image || "/placeholder.svg"}
                 alt={`${tool.name} Logo`}
                 fill
                 className="rounded-md object-contain"
               />
             </div>
             <p>{tool.summary}</p>
             <Button asChild>
               <Link href={tool.link}>
                 Learn More <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </CardContent>
         </Card>
       ))}
     </div>
   </section>
 </div>
 )
}

