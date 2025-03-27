import NavBar from "@/components/nav-bar"

export default function Contact() {
  return (
    <main>
      <NavBar />
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Page</h1>

          <div className="bg-card rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              This is another route to demonstrate that the custom favicon persists across different pages of the
              application.
            </p>
            <p className="text-muted-foreground">
              You can return to the home page to upload a different favicon or reset to the default one.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

