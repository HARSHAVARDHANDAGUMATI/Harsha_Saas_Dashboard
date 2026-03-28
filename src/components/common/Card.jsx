function Card({ children, className = '' }) {
  return <section className={`surface-card p-5 ${className}`}>{children}</section>
}

export default Card
