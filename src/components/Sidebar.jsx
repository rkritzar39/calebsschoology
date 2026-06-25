function Sidebar({ selectedCourse, setSelectedCourse, courses }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-label">Course Menu</div>
        <button className="sidebar-link current">Materials</button>
        <button className="sidebar-link">Updates</button>
        <button className="sidebar-link">Assignments</button>
        <button className="sidebar-link">Calendar</button>
        <button className="sidebar-link">People</button>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Your Courses</div>
        {courses.map((course) => (
          <button
            key={course.id}
            className={selectedCourse.id === course.id ? 'course-chip active' : 'course-chip'}
            onClick={() => setSelectedCourse(course)}
          >
            <span className={`course-dot ${course.color}`} />
            <span>{course.code}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
