import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="section text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-9xl font-bold gradient-text">404</h1>
          <h2 className="mb-4 text-3xl font-bold">Page non trouvée</h2>
          <p className="mb-8 text-lg text-neutral-400">
            Désolé, la page que vous recherchez n'existe pas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary">
              <Home className="h-5 w-5" />
              Retour à l'accueil
            </Link>
            <button onClick={() => window.history.back()} className="btn-secondary">
              <ArrowLeft className="h-5 w-5" />
              Page précédente
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

