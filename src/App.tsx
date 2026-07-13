import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Index from "@/pages/Index"
import Financiero from "@/pages/Financiero"
import IA04 from "@/pages/IA04"
import Francisco from "@/pages/Francisco"
import Ebook from "@/pages/Ebook"
import DonGuz from "@/pages/DonGuz"
import BlackFriday from "@/pages/BlackFriday"
import NotFound from "@/pages/NotFound"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/financiero" element={<Financiero />} />
          <Route path="/ia04" element={<IA04 />} />
          <Route path="/francisco" element={<Francisco />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/donguz" element={<DonGuz />} />
          <Route path="/black" element={<BlackFriday />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
