import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="max-w-lg text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">404 error</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">This page went missing</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          The link may be incorrect, or the page may have moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}

export default Error404