import React from 'react'

const SupaCard = ({s}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{s.title}</h2>
    <p>{s.method}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{s.rating}</button>
    </div>
  </div>
</div>
  )
}

export default SupaCard
