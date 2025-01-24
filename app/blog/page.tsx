import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: "Understanding the Basics of Cybersecurity",
    description: "An introduction to key cybersecurity concepts for beginners.",
    date: "2023-06-01",
    readTime: "5 min read",
    slug: "understanding-basics-cybersecurity",
    image: "/https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-fwEexjdLe7JhN3xQmHSD4oNcLKS8tT.jpeg"
  },
   {
    title: "Top 10 Cybersecurity Tools for 2024",
    description: "Explore the most effective cybersecurity tools to protect your digital assets.",
    date: "2023-05-15",
    readTime: "8 min read",
    slug: "top-10-cybersecurity-tools-2024",
    image: "/placeholder.svg?height=400&width=600&text=Top+Security+Tools"
  },
  {
    title: "Top 10 Cybersecurity Tools for 2023",
    description: "Explore the most effective cybersecurity tools to protect your digital assets.",
    date: "2023-05-15",
    readTime: "8 min read",
    slug: "top-10-cybersecurity-tools-2023",
    image: "/placeholder.svg?height=400&width=600&text=Top+Security+Tools"
  },
  {
    title: "The Rise of AI in Cybersecurity",
    description: "How artificial intelligence is shaping the future of cybersecurity.",
    date: "2023-05-01",
    readTime: "6 min read",
    slug: "rise-of-ai-in-cybersecurity",
    image: "/placeholder.svg?height=400&width=600&text=AI+in+Cybersecurity"
  },
]

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Cybersecurity Insights</h1>
        <p className="text-xl text-muted-foreground mt-2">Stay informed with our latest analysis and expert opinions</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.slug}>
            <div className="relative w-full h-[200px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date} • {post.readTime}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.description}</p>
              <Button asChild>
                <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

