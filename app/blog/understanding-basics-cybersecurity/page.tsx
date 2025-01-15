import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function UnderstandingBasicsCybersecurity() {
  return (
    <article className="space-y-8">
      {/* Back Button */}
      <Button asChild variant="ghost">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog 🔙
        </Link>
      </Button>

      {/* Title */}
      <h1 className="text-4xl font-bold">Understanding the Basics of Cybersecurity 🔐💻</h1>
      <p className="text-xl text-muted-foreground">An introduction to key cybersecurity concepts for beginners. 🌐🔎</p>
      
      {/* What is Cybersecurity */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What is Cybersecurity? 🔒</h2>
        <p>
          Cybersecurity refers to the practice of protecting systems, networks, and programs from digital attacks. 
          These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; 
          extorting money from users; or interrupting normal business processes. 🛡️
        </p>
      </section>

      {/* Key Cybersecurity Concepts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Cybersecurity Concepts 🧠</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Information Security</strong>: Protecting data from unauthorized access, use, disclosure, disruption, modification, or destruction. 📡</li>
          <li><strong>Network Security</strong>: Implementing both hardware and software mechanisms to protect the network and infrastructure from unauthorized access, misuse, modification, or denial of network-accessible resources. 🌐</li>
          <li><strong>Application Security</strong>: Measures to prevent security flaws in the design, development, deployment, or maintenance of applications. 💻</li>
          <li><strong>Operational Security</strong>: Identifying critical information to determine if it can be observed by enemy intelligence systems. 🔍</li>
        </ul>
      </section>

      {/* Common Cybersecurity Threats */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common Cybersecurity Threats ⚠️</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Malware</strong>: Software designed to disrupt, damage, or gain unauthorized access to a computer system. 💻</li>
          <li><strong>Phishing</strong>: The practice of sending fraudulent communications that appear to come from a reputable source. 📧</li>
          <li><strong>Man-in-the-Middle (MitM) Attacks</strong>: An attack where the attacker secretly relays and possibly alters communications between two parties. 🕵️‍♂️</li>
          <li><strong>Denial-of-Service (DoS) Attacks</strong>: An attack meant to shut down a machine or network, making it inaccessible to its intended users. 🚫</li>
        </ul>
      </section>

      {/* Basic Cybersecurity Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Cybersecurity Best Practices 🛡️</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Use strong, unique passwords for all accounts 🔑</li>
          <li>Enable two-factor authentication whenever possible 🔐</li>
          <li>Keep software and operating systems up to date 🖥️</li>
          <li>Use antivirus software and keep it updated 🦠</li>
          <li>Be cautious when clicking on links or downloading attachments from unknown sources ⚠️</li>
          <li>Regularly backup important data 💾</li>
          <li>Educate yourself and others about cybersecurity risks and best practices 📚</li>
        </ol>
      </section>

      {/* Conclusion */}
      <p className="text-lg">
        Understanding these basics is the first step in protecting yourself and your organization from cyber threats. 
        As technology evolves, so do the threats, making cybersecurity an ever-changing field that requires constant learning and adaptation. 🌱
      </p>
    </article>
  )
}

