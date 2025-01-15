import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

const tools = [
  {
    name: "Nmap",
    description: "Network scanning and discovery tool",
    summary: "Powerful open-source tool for network exploration and security auditing.",
    link: "/tools/nmap"
  },
  {
    name: "Wireshark",
    description: "Network protocol analyzer",
    summary: "Widely-used network protocol analyzer for detailed packet inspection.",
    link: "/tools/wireshark"
  },
  {
    name: "Metasploit",
    description: "Penetration testing framework",
    summary: "Comprehensive platform for developing, testing, and executing exploit code.",
    link: "/tools/metasploit"
  },
  {
    name: "Hydra",
    description: "Password cracking tool",
    summary: "Fast and flexible password cracking tool supporting various protocols.",
    link: "/tools/hydra"
  },
  {
    name: "Hashcat",
  description: "Advanced password recovery tool",
  summary: "A fast and flexible password cracking utility that supports a wide range of hashing algorithms and hardware acceleration.",
  link: "/tools/hashcat"
  }
  // Add more tools here
]

export default function ToolsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Cybersecurity Tools</h1>
      <p className="text-xl text-muted-foreground">Explore our collection of powerful cybersecurity tools</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card key={tool.name}>
            <CardHeader>
              <CardTitle>{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{tool.summary}</p>
              <Button asChild>
                <Link href={tool.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

