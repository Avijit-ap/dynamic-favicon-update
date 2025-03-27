import NavBar from "@/components/nav-bar"

export default function About() {
  return (
    <main>
      <NavBar />
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">About Page</h1>

          <div className="bg-card rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">About Dynamic Favicons</h2>
            <p className="text-muted-foreground mb-4">
              Notice that your custom favicon is still displayed on this page. The favicon is stored in localStorage and
              applied to all routes in the application.
            </p>
            <p className="text-muted-foreground">
              In Next.js, favicons are typically handled through the app/favicon.ico file or through the metadata API
              [^1]. However, for dynamic favicons that can be changed by users, we need to use client-side JavaScript to
              update the document head.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

