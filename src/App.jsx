import { useState } from "react";
import { MessageSquare, Sparkles, Send } from "lucide-react";
import { useToast } from "ai-toast";

function App({ position, setPosition }) {
  const { showToast } = useToast();
  const [message, setMessage] = useState("");

  const handleShowToast = () => {
    if (message.trim() !== "") {
      showToast(message);
      setMessage("");
    } else {
      showToast("⚠️ Please enter a message first!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-500/20 rounded-lg">
              <Sparkles className="w-6 h-6 text-teal-400" />
            </div>
            <h1 className="text-2xl font-bold text-white">AI Toast</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Position Controls */}
        <div className="mb-8 text-center">
          <h2 className="text-lg font-semibold text-gray-300 mb-4">
            Select Toast Position (Current: {position})
          </h2>
          <div className="grid grid-cols-3 gap-3 justify-center">
            <button
              onClick={() => setPosition("top-left")}
              className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
            >
              Top Left
            </button>
            <button
              onClick={() => setPosition("top-center")}
              className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
            >
              Top Center
            </button>
            <button
              onClick={() => setPosition("top-right")}
              className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
            >
              Top Right
            </button>
            <button
              onClick={() => setPosition("bottom-left")}
              className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
            >
              Bottom Left
            </button>
            <button
              onClick={() => setPosition("bottom-center")}
              className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
            >
              Bottom Center
            </button>
            <button
              onClick={() => setPosition("bottom-right")}
              className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
            >
              Bottom Right
            </button>
          </div>
        </div>

        {/* Toast Generator Card */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-teal-500/20 rounded-lg">
              <MessageSquare className="w-5 h-5 text-teal-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">
              Toast Generator
            </h3>
          </div>

          <div className="space-y-6">
            {/* Input Field */}
            <div>
              <label
                htmlFor="message-input"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Describe your toast message
              </label>
              <input
                id="message-input"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g., Success message for file upload completion"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleShowToast}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <Send className="w-4 h-4" />
              Show Toast
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Powered by AI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
