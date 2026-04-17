import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('Portfolio render error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto min-h-screen w-full max-w-5xl px-6 py-20 text-center text-white">
          <h1 className="text-3xl font-semibold">Something went wrong.</h1>
          <p className="mt-4 text-white/70">
            Please refresh the page. If this continues, check the console for details.
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
