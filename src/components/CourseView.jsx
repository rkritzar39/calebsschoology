function CourseView({ course }) {
  return (
    <section className="course-view">
      <div className="course-view-header">
        <div>
          <div className="eyebrow">Current course</div>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
        <div className="preview-badge">Public preview</div>
      </div>

      <div className="course-grid">
        <div className="panel large">
          <div className="panel-title">Materials</div>
          <div className="folder-list">
            {course.folders.map((folder) => (
              <details key={folder.name} className="folder-item" open>
                <summary>{folder.name}</summary>
                <ul>
                  {folder.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>

        <div className="stack">
          <div className="panel">
            <div className="panel-title">Upcoming</div>
            <ul className="simple-list">
              {course.upcoming.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <div className="panel-title">Hidden in public mode</div>
            <ul className="simple-list muted-list">
              <li>Gradebook</li>
              <li>Assignment submission</li>
              <li>Student roster</li>
              <li>Editing tools</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseView
