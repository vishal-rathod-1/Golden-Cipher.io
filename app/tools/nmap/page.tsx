import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function NmapPage() {
  return (
    <div className="space-y-8">
      <Button asChild variant="ghost">
        <Link href="/tools"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Tools 🔙</Link>
      </Button>
      <h1 className="text-4xl font-bold">Nmap 🔍</h1>
      <p className="text-xl text-muted-foreground">Network Mapper - A powerful network scanning and discovery tool ⚡</p>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview 🌐</h2>
        <p>Nmap (Network Mapper) is a robust tool widely used in the field of cybersecurity for information gathering. It is classified as an active reconnaissance tool, helping users gather critical data about:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Open ports 🚪</li>
          <li>Operating systems (OS) 🖥️</li>
          <li>Services running on targets ⚙️</li>
          <li>User-defined or pre-built scripts written in the Lua language 📜</li>
        </ul>
        <p>Nmap is versatile and capable of performing various operations such as:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Host discovery 🕵️‍♂️</li>
          <li>Port scanning 🔒</li>
          <li>Service scanning 🔎</li>
          <li>OS detection 🛠️</li>
          <li>Utilizing inbuilt scripts for enumeration or brute force attacks (e.g., <code>smb-brute</code>) 💻</li>
        </ul>
        
        {/* Image Placeholder */}
        <img src="<image_url>" alt="Nmap Overview" className="w-full h-auto rounded-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Host and Port Scanning 🚀</h2>
        <h3 className="text-xl font-semibold">nmap -sn</h3>
        <p><strong>Syntax:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            nmap -sn &lt;target&gt;
          </code>
        </pre>
        <p><strong>Explanation:</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Identifies active hosts without scanning ports 💡.</li>
          <li><strong>Example:</strong> <code>nmap -sn &lt;target_range&gt;</code></li>
        </ul>

        <h3 className="text-xl font-semibold">nmap -p</h3>
        <p><strong>Syntax:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            nmap -p &lt;port_range&gt; &lt;target&gt;
          </code>
        </pre>
        <p><strong>Explanation:</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Scans specific ports or ranges 🔓.</li>
          <li><strong>Example (all ports):</strong> <code>nmap -p- &lt;target&gt;</code></li>
          <li><strong>Example (range of ports):</strong> <code>nmap -p 20-80 &lt;target&gt;</code></li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Service and OS Detection 🔍</h2>
        <h3 className="text-xl font-semibold">nmap -sV</h3>
        <p><strong>Syntax:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            nmap -sV &lt;target&gt;
          </code>
        </pre>
        <p><strong>Explanation:</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Detects service versions running on open ports 🛠️.</li>
          <li><strong>Example:</strong> <code>nmap -sV &lt;target&gt;</code></li>
        </ul>

        <h3 className="text-xl font-semibold">nmap -O</h3>
        <p><strong>Syntax:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            nmap -O &lt;target&gt;
          </code>
        </pre>
        <p><strong>Explanation:</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Performs operating system detection 🖥️.</li>
          <li><strong>Example:</strong> <code>nmap -O &lt;target&gt;</code></li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Script Utilization 📝</h2>
        <h3 className="text-xl font-semibold">nmap --script</h3>
        <p><strong>Syntax:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            nmap --script &lt;script_name&gt; &lt;target&gt;
          </code>
        </pre>
        <p><strong>default scan:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            nmap --script -sC &lt;target&gt;
          </code>
        </pre>
        <p><strong>Explanation:</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Executes a specified Nmap script to perform advanced tasks like enumeration or brute-forcing 🔓.</li>
          <li><strong>Example:</strong> <code>nmap --script smb-brute &lt;target&gt;</code></li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Speed Optimization ⚡</h2>
        <h3 className="text-xl font-semibold">nmap -F</h3>
        <p><strong>Syntax:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            nmap -F &lt;target&gt;
          </code>
        </pre>
        <p><strong>Explanation:</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Quickly scans the top 1000 commonly used ports 🚀.</li>
          <li><strong>Example:</strong> <code>nmap -F &lt;target&gt;</code></li>
        </ul>

        <h3 className="text-xl font-semibold">nmap -T0 to nmap -T5</h3>
        <p><strong>Syntax:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            nmap -T&lt;value&gt; &lt;target&gt;
          </code>
        </pre>
        <p><strong>Explanation:</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Adjusts the timing template to control scan speed and stealth:</li>
          <li><strong>T0:</strong> Paranoid (very slow, avoids detection)</li>
          <li><strong>T1:</strong> Sneaky</li>
          <li><strong>T2:</strong> Polite</li>
          <li><strong>T3:</strong> Normal (default)</li>
          <li><strong>T4:</strong> Aggressive</li>
          <li><strong>T5:</strong> Insane (fastest but noisy) ⚡</li>
          <li><strong>Example:</strong> <code>nmap -T4 &lt;target&gt;</code></li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Firewall and IDS Bypassing 🔒</h2>
        <h3 className="text-xl font-semibold">nmap --mtu</h3>
        <p><strong>Syntax:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            nmap --mtu &lt;size&gt; &lt;target&gt;
          </code>
        </pre>
        <p><strong>Explanation:</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Modifies the packet size to evade detection by firewalls or IDS 🚨.</li>
          <li><strong>Example:</strong> <code>nmap --mtu 16 &lt;target&gt;</code></li>
        </ul>

       <h3 className="text-xl font-semibold">6. Nmap Flex: Full Port Sweep with Aggressive Scan Mode 🔥</h3>
       <p><strong>Syntax:</strong></p>
       <pre className="bg-muted p-4 rounded-md overflow-x-auto">
         <code>
           nmap -p- -sS -sC -sV -O -A &lt;target&gt;
         </code>
       </pre>
       <p><strong>Explanation:</strong></p>
       <ul className="list-disc list-inside space-y-2">
         <li>Scans all ports, performs a stealth scan, detects services, OS, and runs default scripts 🛠️.</li>
         <li><strong>Example:</strong> <code>nmap -p- -sS -sC -sV -O -A &lt;target&gt;</code></li>
       </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. Nmap in Practice 🧑‍💻</h2>
        <p>Use Nmap responsibly and legally. Always obtain proper authorization before scanning networks, especially in production or public environments. Unauthorized scans can be considered illegal and unethical 🛑.</p>
        <p><strong>Remember:</strong> Nmap can be a powerful tool for penetration testers, security professionals, and system administrators when used ethically and with caution 🚨.</p>
      </section>
    </div>
  )
}

