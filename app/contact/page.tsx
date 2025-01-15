"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [instagram, setInstagram] = useState("")
  const [twitter, setTwitter] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [github, setGithub] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", { name, email, message, instagram, twitter, linkedin, github })
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    })
    setName("")
    setEmail("")
    setMessage("")
    setInstagram("")
    setTwitter("")
    setLinkedin("")
    setGithub("")
  }

  return (
    <div className="max-w-md mx-auto space-y-8">
      <h1 className="text-4xl font-bold">Contact Us</h1>
   
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <p id="name" className="text-sm">
            Vishal Rathod
          </p>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <p id="email" className="text-sm">
            <a href="mailto:vishalrathod2036@gmail.com" className="text-blue-600 hover:underline">
              vishalrathod2036@gmail.com
            </a>
          </p>
        </div>
        <div>
          <label htmlFor="twitter" className="block text-sm font-medium mb-1">
            Twitter
          </label>
          <p id="twitter" className="text-sm">
            <a href="https://x.com/VishalRath79922" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              @VishalRath79922
            </a>
          </p>
        </div>
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium mb-1">
            LinkedIn
          </label>
          <p id="linkedin" className="text-sm">
            <a href="https://www.linkedin.com/in/vishal-rathod-943ba5259/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Vishal Rathod
            </a>
          </p>
        </div>
        <div>
          <label htmlFor="github" className="block text-sm font-medium mb-1">
            GitHub
          </label>
          <p id="github" className="text-sm">
            <a href="https://github.com/vishal-rathod-1" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              github.com/vishal-rathod-1
            </a>
          </p>
        </div>
        <div>
          <label htmlFor="instagram" className="block text-sm font-medium mb-1">
            Instagram
          </label>
          <p id="instagram" className="text-sm">
            <a href="https://www.instagram.com/_vishal_rathod_____/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              @_vishal_rathod_____
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

