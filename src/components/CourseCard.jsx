function CourseCard({ course, onOpen }) {
  return (
    <article className="course-card">
      <div className={`course-banner ${course.color}`}>
        <span>{course.code}</span>
      </div>
      <div className="course-card-body">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-meta">Instructor: {course.instructor}</div>
        <button className="primary-button" onClick={() => onOpen(course)}>
          Open Course
        </button>
      </div>
    </article>
  )
}

export default CourseCard
