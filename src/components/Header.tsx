import logo from "/InteropSAFE.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center">
          <div className="text-lg font-semibold"><img src={logo} alt="InteropSafe Logo" className="h-8" /></div>
          <nav className="ml-auto flex items-center space-x-4">
            <appkit-button />
          </nav>
        </div>
      </div>
    </header>
  )
}
