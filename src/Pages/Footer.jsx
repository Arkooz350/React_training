function Footer() {
  return (
    <>
      <div id="footer">
        <footer className="  rounded-4xl flex w-450 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Contenu principal du footer en horizontal */}
            <div className="flex flex-wrap items-center justify-between gap-8 mb-6">
              {/* Logo et description */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold">L</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Votre Marque</h3>
                  <p className="text-slate-400 text-sm">
                    Excellence & Innovation
                  </p>
                </div>
              </div>

              {/* Navigation horizontale */}
              <nav className="flex flex-wrap items-center gap-8">
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Accueil
                </a>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  À propos
                </a>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </nav>

              {/* Réseaux sociaux */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-sm font-semibold">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-sm font-semibold">𝕏</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-sm font-semibold">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-sm font-semibold">yt</span>
                </a>
              </div>
            </div>

            {/* Ligne de séparation */}
            <div className="border-t border-slate-700 my-6"></div>

            {/* Copyright et liens légaux en horizontal */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
              <p>© 2025 Votre Marque. Tous droits réservés.</p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Confidentialité
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Conditions
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Mentions légales
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
