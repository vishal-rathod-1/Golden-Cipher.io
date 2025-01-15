import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-8">
      <Button asChild variant="ghost">
        <Link href="/tools"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Tools</Link>
      </Button>
      {children}
    </div>
  )
}

