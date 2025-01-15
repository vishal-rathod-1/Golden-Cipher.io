import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function WiresharkPage() {
  return (
    <div className="space-y-8">
      <Button asChild variant="ghost">
        <Link href="/tools"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Tools 🔙</Link>
      </Button>
      <h1 className="text-4xl font-bold">Wireshark 🦈</h1>
      <p className="text-xl text-muted-foreground">Network Protocol Analyzer 🌐</p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview 🌍</h2>
        <p>Wireshark is a widely used network protocol analyzer that allows users to capture and interactively browse the traffic running on a computer network. It is an essential tool for network administrators, security professionals, and penetration testers to analyze network packets and troubleshoot network issues 🔍.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Captures network packets in real-time 🕒</li>
          <li>Supports a wide range of protocols for analysis 🖥️</li>
          <li>Provides a graphical interface to analyze traffic in-depth 🛠️</li>
          <li>Works on various platforms, including Windows, macOS, and Linux 🖱️</li>
        </ul>

        {/* Image Placeholder */}
        <img src="<image_url>" alt="Wireshark Overview" className="w-full h-auto rounded-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Installing Wireshark 🛠️</h2>
        <h3 className="text-xl font-semibold">Installation on Linux (Kali Linux)</h3>
        <p><strong>Command:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            sudo apt-get install wireshark
          </code>
        </pre>
        <p>Wireshark is available in most Linux distributions' package repositories. To install it on Kali Linux, use the command above 🧑‍💻.</p>

        <h3 className="text-xl font-semibold">Installing Wireshark from Source</h3>
        <p><strong>Steps:</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Clone the Wireshark repository:</li>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>
              git clone https://github.com/wireshark/wireshark.git
            </code>
          </pre>
          <li>Navigate to the directory:</li>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>
              cd wireshark
            </code>
          </pre>
          <li>Build and install:</li>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>
              ./configure
              make
              sudo make install
            </code>
          </pre>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Basic Wireshark Usage ⚙️</h2>
        <h3 className="text-xl font-semibold">Starting Wireshark</h3>
        <p>To start capturing packets, open Wireshark from the terminal or application menu and choose the network interface from which you want to capture traffic (e.g., eth0, wlan0) 📶.</p>

        <h3 className="text-xl font-semibold">Wireshark Capture Command</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            sudo wireshark -i <span className="text-green-400">x.x.x.x</span>
          </code>
        </pre>
        <p>The command above starts Wireshark and captures traffic on the network interface with IP address <code>x.x.x.x</code> 🧑‍💻.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Analyzing Traffic 🔍</h2>
        <h3 className="text-xl font-semibold">Applying Display Filters</h3>
        <p><strong>Example: Filter HTTP Traffic</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            http
          </code>
        </pre>
        <p>To filter HTTP traffic, simply enter <code>http</code> in the display filter bar. Wireshark will show only the HTTP packets captured from the network ✨.</p>

        <h3 className="text-xl font-semibold">Filter by IP Address</h3>
        <p><strong>Example: Filter Traffic from a Specific IP</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            ip.addr == <span className="text-green-400">x.x.x.x</span>
          </code>
        </pre>
        <p>This filter allows you to view packets that are either from or destined to the IP address <code>x.x.x.x</code> 💻.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Advanced Wireshark Features ⚡</h2>
        <h3 className="text-xl font-semibold">Exporting Packet Data</h3>
        <p><strong>Command:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            File &gt; Export Packet Dissections &gt; As CSV
          </code>
        </pre>
        <p>Wireshark allows you to export packet data in various formats, such as CSV, for further analysis. This can be useful when working with large datasets 📊.</p>

        <h3 className="text-xl font-semibold">Following TCP Streams</h3>
        <p>To follow a specific TCP stream, right-click on a TCP packet and select <code>Follow</code> → <code>TCP Stream</code>. Wireshark will display all packets related to that TCP connection, which is useful for analyzing HTTP sessions, file transfers, and more 📁.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Tips for Effective Analysis 🧠</h2>
        <h3 className="text-xl font-semibold">Use Custom Profiles</h3>
        <p><strong>Tip:</strong> Create custom profiles to save display filters, colorization rules, and layout preferences, which can be helpful for specific types of analysis 🌈.</p>

        <h3 className="text-xl font-semibold">Capture Only Relevant Traffic</h3>
        <p><strong>Tip:</strong> Use capture filters to limit the amount of traffic being captured, such as filtering by IP or protocol to avoid overwhelming the capture with unnecessary data 🛑.</p>
      </section>
    </div>
  )
}

