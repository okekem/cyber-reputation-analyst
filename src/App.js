
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  const renderContent = () => {
    switch (page) {
      case "home":
        return <div className="text-center p-12">Welcome to Cyber Reputation Analyst</div>;
      case "about":
        return <div className="p-12">About Us content goes here.</div>;
      default:
        return <div className="p-12">Select a page from the navigation.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-900 text-white py-6 px-4">
        <h1 className="text-4xl font-bold">Cyber Reputation Analyst</h1>
        <nav className="mt-4 flex gap-4">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("about")}>About</button>
        </nav>
      </header>
      {renderContent()}
    </div>
  );
}
