import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <main className="min-h-screen bg-dark text-light flex flex-col items-center justify-center text-center section-container">
      <h1 className="text-4go-hero font-heading font-black mb-4">404</h1>
      <p className="section-subtitle mb-8 mx-auto">Página não encontrada.</p>
      <Link to="/" className="btn-primary">
        Voltar ao início
      </Link>
    </main>
  )
}

export default NotFound
