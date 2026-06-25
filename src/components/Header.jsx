function Header({ activeTab, onChangeTab }) {
  const tabs = ['Home', 'Courses', 'Resources']

  return (
    <header className="topbar">
      <div className="brand-wrap">
        <div className="brand-mark">L</div>
        <div>
          <div className="brand-name">LumaLearn</div>
          <div className="brand-subtitle">College LMS Preview</div>
        </div>
      </div>

      <nav className="topnav" aria-label="Primary navigation">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'nav-pill active' : 'nav-pill'}
            onClick={() => onChangeTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
