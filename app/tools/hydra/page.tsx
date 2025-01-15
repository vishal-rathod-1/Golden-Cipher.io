import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const HashcatPage = () => {
  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Button asChild variant="ghost">
        <Link href="/tools">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tools 🔙
        </Link>
      </Button>

      {/* Header */}
      <h1 className="text-4xl font-bold">Hashcat 🔒</h1>
      <p className="text-xl text-muted-foreground">
        Advanced Password Recovery Tool for Security Enthusiasts 🛡️
      </p>

      {/* Overview Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview 🌍</h2>
        <p>
          Hashcat is a fast and powerful password recovery tool that supports multiple hash types, including MD5, SHA1, bcrypt, and more. It’s widely used for password cracking during penetration testing and cybersecurity assessments 🧑‍💻.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Supports a wide range of hashing algorithms 🔐</li>
          <li>Utilizes GPUs for high-performance cracking ⚡</li>
          <li>Highly customizable with rules, masks, and wordlists 📝</li>
        </ul>
        <img
          src="<image_url>"
          alt="Hashcat Overview"
          className="w-full h-auto rounded-md"
        />
      </section>

      {/* Command Structure Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Hashcat Command Structure 🛠️</h2>
        <h3 className="text-xl font-semibold">Basic Command</h3>
        <p>
          <strong>Command Structure:</strong>
        </p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            hashcat -a <span className="text-green-400">attack_mode</span> -m{" "}
            <span className="text-green-400">hash_type</span> -o{" "}
            <span className="text-green-400">output_file</span>{" "}
            <span className="text-green-400">hash_file</span> <br />
            <span className="text-green-400">wordlist.txt</span>
          </code>
        </pre>
        <p>
          Hashcat follows the structure:{" "}
          <code>
            hashcat -a &lt;attack_mode&gt; -m &lt;hash_type&gt; -o
            &lt;output_file&gt; &lt;hash_file&gt; &lt;wordlist&gt;
          </code>
        </p>

        <h3 className="text-xl font-semibold">Explanation of Options 📝</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>-a:</strong> Specifies the attack mode. Examples include:
            <ul className="list-disc list-inside ml-4">
              <li><code>-a 0</code>: Straight attack 📜</li>
              <li><code>-a 3</code>: Mask attack 🎭</li>
              <li><code>-a 6</code>: Hybrid wordlist + mask 🔗</li>
              <li><code>-a 1</code>: Dictionary-based attack 📖</li>
              <li><code>-a 2</code>: Brute-force attack 🔓</li>
              <li><code>-a 4</code>: Rule-based attack 🔧</li>
            </ul>
          </li>
          <li>
            <strong>-m:</strong> Specifies the hash type (e.g., 0 for MD5, 1000
            for NTLM) 🔐
          </li>
          <li>
            <strong>-o:</strong> Specifies the output file where cracked
            passwords will be stored 📂
          </li>
          <li>
            <strong>hash_file:</strong> File containing hashes to crack 📜
          </li>
          <li>
            <strong>wordlist.txt:</strong> Wordlist used for password guessing
            attempts 📖
          </li>
        </ul>
      </section>

      {/* Example Commands Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Example Hashcat Commands 💻</h2>

        {/* Example 1 */}
        <h3 className="text-xl font-semibold">Cracking MD5 Hashes with a Wordlist (Dictionary Attack)</h3>
        <p><strong>Command:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            hashcat -a 0 -m 0 -o cracked.txt hashes.txt wordlist.txt
          </code>
        </pre>
        <p>
          This command performs a straight attack (<code>-a 0</code>) on MD5
          hashes (<code>-m 0</code>) using the wordlist{" "}
          <code>wordlist.txt</code>.
        </p>

        {/* Example 2 */}
        <h3 className="text-xl font-semibold">Mask Attack on NTLM Hashes (Brute Force)</h3>
        <p><strong>Command:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            hashcat -a 3 -m 1000 -o cracked.txt hashes.txt ?a?a?a?a?a?a?a?a
          </code>
        </pre>
        <p>
          This command performs a mask attack (<code>-a 3</code>) on NTLM
          hashes (<code>-m 1000</code>) with an 8-character alphanumeric mask.
        </p>

        {/* Example 3 */}
        <h3 className="text-xl font-semibold">Brute Force Attack on SHA-256 Hashes</h3>
        <p><strong>Command:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            hashcat -a 2 -m 1400 -o cracked.txt hashes.txt ?d?d?d?d
          </code>
        </pre>
        <p>
          This command performs a brute-force attack (<code>-a 2</code>) on
          SHA-256 hashes (<code>-m 1400</code>) with a 4-digit numeric mask.
        </p>

        {/* Example 4 */}
        <h3 className="text-xl font-semibold">Rule-Based Attack on SHA-1 Hashes</h3>
        <p><strong>Command:</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            hashcat -a 4 -m 100 -o cracked.txt hashes.txt wordlist.txt -r
            rules/best64.rule
          </code>
        </pre>
        <p>
          This command performs a rule-based attack (<code>-a 4</code>) on SHA-1
          hashes (<code>-m 100</code>) using a wordlist and applying rules from
          the <code>best64.rule</code> file.
        </p>
      </section>

      {/* Use Cases Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Common Use Cases for Hashcat 🧑‍💻</h2>

        <h3 className="text-xl font-semibold">Password Cracking</h3>
        <p>
          Hashcat is often used to test password strength by cracking password
          hashes using various attack modes and wordlists 💥.
        </p>

        <h3 className="text-xl font-semibold">Testing Hash Resilience</h3>
        <p>
          Penetration testers and security professionals use Hashcat to evaluate
          the robustness of hashing algorithms and password policies 🏆.
        </p>
      </section>
    </div>
  );
};

export default HashcatPage;

