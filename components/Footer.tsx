import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#4169E1] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>Agents</li>
              <li>Evaluation</li>
              <li>Retrieval</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>Python Docs</li>
              <li>JS/TS Docs</li>
              <li>GitHub</li>
              <li>Integrations</li>
              <li>Changelog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Blog</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
              <li>Community</li>
              <li>Marketing Assets</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Sign up for our newsletter to stay up to date</h3>
            <div className="flex">
              <Input type="email" placeholder="Your email..." className="rounded-r-none" />
              <Button type="submit" className="rounded-l-none bg-white text-[#4169E1] hover:bg-gray-100">
                →
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 text-6xl font-bold">
          Auxilium.
        </div>
      </div>
    </footer>
  )
}