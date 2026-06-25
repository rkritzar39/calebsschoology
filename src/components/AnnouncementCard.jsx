function AnnouncementCard({ item }) {
  return (
    <article className="announcement-card">
      <div className="announcement-meta">
        <span>{item.course}</span>
        <span>{item.date}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </article>
  )
}

export default AnnouncementCard
