import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function MetasploitPage() {
  return (
    <div className="space-y-8">
      <Button asChild variant="ghost">
        <Link href="/tools"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Tools 🔙</Link>
      </Button>
      <h1 className="text-4xl font-bold">Metasploit Framework 💣</h1>
      <p className="text-xl text-muted-foreground">Penetration Testing and Exploitation Framework 🕵️‍♂️</p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview 🌍</h2>
        <p>Metasploit is an open-source framework that helps security professionals and penetration testers find, exploit, and validate vulnerabilities in systems. It allows users to automate attacks and gain access to systems in a controlled manner to identify and address security flaws before malicious attackers can exploit them.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Exploitation of known vulnerabilities 🧑‍💻</li>
          <li>Wide range of payloads and exploits 💥</li>
          <li>Post-exploitation modules for system control 🖥️</li>
          <li>Powerful scripting capabilities and automation ⚡</li>
        </ul>
        
        {/* Image Placeholder */}
        <img src="<image_url>" alt="Metasploit Overview" className="w-full h-auto rounded-md" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Setting Up Metasploit 🛠️</h2>
        <h3 className="text-xl font-semibold">Installing Metasploit</h3>
        <p><strong>Steps:</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>On Kali Linux, Metasploit is pre-installed 🚀.</li>
          <li>For other systems, run the following commands:</li>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>
              curl https://raw.githubusercontent.com/rapid7/metasploit-framework/master/msfupdate | sh
            </code>
          </pre>
          <li>Ensure all dependencies are installed using <code>bundle install</code> 📦.</li>
        </ul>

        <h3 className="text-xl font-semibold">Launching Metasploit</h3>
        <p><strong>Command:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            msfconsole
          </code>
        </pre>
        <p>This command will launch the Metasploit console and give you access to its powerful features ⚡.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Finding Exploits 🔍</h2>
        <h3 className="text-xl font-semibold">Using Search for Exploits</h3>
        <p><strong>Command:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            search <span className="text-green-400">"exploit_name"</span>
          </code>
        </pre>
        <p>This command allows you to search for exploits based on the software name or vulnerability identifier 🔎.</p>

        <h3 className="text-xl font-semibold">Using the <code>use</code> Command</h3>
        <p><strong>Command:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            use <span className="text-green-400">exploit_name</span>
          </code>
        </pre>
        <p>This command loads the specified exploit into the current Metasploit session 🧑‍💻.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Setting Payloads ⚙️</h2>
        <h3 className="text-xl font-semibold">Choosing a Payload</h3>
        <p><strong>Command:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            set PAYLOAD <span className="text-green-400">payload_name</span>
          </code>
        </pre>
        <p>Payloads are the code you use to execute commands on the target system after exploitation 🎯.</p>

        <h3 className="text-xl font-semibold">Setting Payload Options</h3>
        <p><strong>Command:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            show options
          </code>
        </pre>
        <p>This command will display the available options for the selected payload, such as IP addresses and ports 🔒.</p>

        <h3 className="text-xl font-semibold">Setting LHOST, LPORT, RHOST, and RPORT</h3>
        <p><strong>Explanation:</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>LHOST</strong> (Local Host) is the IP address of your machine (attacker machine) where the payload will connect back to. It is set to your local IP or public IP for external connections 🖥️.</li>
          <li><strong>LPORT</strong> (Local Port) is the port number on your local machine that the payload will listen on for incoming connections 🔌.</li>
          <li><strong>RHOST/RHOSTS</strong> (Remote Host) is the target machine’s IP address. This is the machine you want to exploit 🌍.</li>
          <li><strong>RPORT</strong> (Remote Port) is the port number on the target machine that the exploit will target. For example, if you're exploiting a web server, this might be port 80 (HTTP) 🌐.</li>
        </ul>
        
        <p><strong>Commands to set:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            set LHOST <span className="text-green-400">y.y.y.y </span>
          </code>
          <code>
            set LPORT <span className="text-green-400">4444 </span>
          </code>
          <code>
            set RHOST <span className="text-green-400">x.x.x.x </span>
          </code>
          <code>
            set RPORT <span className="text-green-400">80</span>
          </code>
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Exploit the Target 💥</h2>
        <h3 className="text-xl font-semibold">Launching the Exploit</h3>
        <p><strong>Command:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            exploit
          </code>
        </pre>
        <p>This will launch the selected exploit and payload on the target system 🚀.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Post-Exploitation 🧑‍💻</h2>
        <h3 className="text-xl font-semibold">Using Post-Exploitation Modules</h3>
        <p><strong>Examples:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            use post/windows/gather/enum_users
          </code>
        </pre>
        <p>Post-exploitation modules allow you to gather more information after the initial compromise 🕵️‍♂️.</p>
      </section>
    </div>
  )
}

