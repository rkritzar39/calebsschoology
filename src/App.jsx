import { useMemo, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CourseCard from './components/CourseCard'
import AnnouncementCard from './components/AnnouncementCard'
import CourseView from './components/CourseView'
import { announcements, courses, resources, viewerNotice } from './data/courseData'

function App() {
  const [activeTab, setActiveTab] = useState('Home')
  const [selectedCourse, setSelectedCourse] = useState(courses[0])

  const upcomingCount = useMemo(
    () => courses.reduce((count, course) => count + course.upcoming.length, 0),
    [],
  )

  return (
    <div className="app-shell">
      <Header activeTab={activeTab} onChangeTab={setActiveTab} />

      <main className="layout">
        <Sidebar
          selectedCourse={selectedCourse}
          setSelectedCourse={(course) => {
            setSelectedCourse(course)
            setActiveTab('Courses')
          }}
          courses={courses}
        />

        <section className="content">
          <section className="hero-card">
            <div>
              <span className="eyebrow">Preview-only campus portal</span>
              <h1>Build your college LMS and publish it as a read-only site.</h1>
              <p>
                This starter is designed for GitHub Pages so your viewers can browse courses,
                folders, announcements, and resources while editing stays in your repository.
              </p>
            </div>
            <div className="hero-stat-grid">
              <div className="stat-box">
                <strong>{courses.length}</strong>
                <span>Courses</span>
              </div>
              <div className="stat-box">
                <strong>{announcements.length}</strong>
                <span>Announcements</span>
              </div>
              <div className="stat-box">
                <strong>{upcomingCount}</strong>
                <span>Upcoming items</span>
              </div>
            </div>
          </section>

          <section className="notice-card">
            <div className="notice-title">{viewerNotice.title}</div>
            <p>{viewerNotice.text}</p>
          </section>

          {activeTab === 'Home' && (
            <>
              <section className="section-block">
                <div className="section-header">
                  <h2>Announcements</h2>
                  <button className="secondary-button" onClick={() => setActiveTab('Courses')}>
                    Go to courses
                  </button>
                </div>
                <div className="announcement-grid">
                  {announcements.map((item) => (
                    <AnnouncementCard key={item.id} item={item} />
                  ))}
                </div>
              </section>

              <section className="section-block">
                <div className="section-header">
                  <h2>Course dashboard</h2>
                </div>
                <div className="course-card-grid">
                  {courses.map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      onOpen={(value) => {
                        setSelectedCourse(value)
                        setActiveTab('Courses')
                      }}
                    />
                  ))}
                </div>
              </section>
            </>
          )}

          {activeTab === 'Courses' && <CourseView course={selectedCourse} />}

          {activeTab === 'Resources' && (
            <section className="section-block">
              <div className="section-header">
                <h2>Shared resources</h2>
              </div>
              <div className="panel">
                <ul className="resource-list">
                  {resources.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </section>
      </main>

      <footer className="footer">
        This project is an independently built educational LMS interface inspired by modern
        learning platforms. It is not affiliated with or endorsed by Schoology or PowerSchool.
      </footer>
    </div>
  )
}

export default App
