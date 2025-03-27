import FaviconUpload from "@/components/favicon-upload"
import NavBar from "@/components/nav-bar"

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Dynamic Favicon Demo</h1>

          <div className="bg-card rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Upload a Custom Favicon</h2>
            <p className="text-muted-foreground mb-6">
              Upload an image to use as your favicon. It will be stored in localStorage and persist across all routes of
              the application.
            </p>

            <FaviconUpload />
          </div>

          <div className="bg-card rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">How It Works</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Upload an image using the button above</li>
              <li>The image is converted to a data URL and stored in localStorage</li>
              <li>A client component updates the favicon in the document head</li>
              <li>Navigate to different pages to see the favicon persist</li>
              <li>The favicon will remain even if you refresh the page</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

