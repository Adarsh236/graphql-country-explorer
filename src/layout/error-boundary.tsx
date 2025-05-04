import React from "react";

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? (
      <div className="p-8 text-center text-red-500">Something went wrong.</div>
    ) : (
      this.props.children
    );
  }
}
