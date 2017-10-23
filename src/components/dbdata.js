import React from 'react'

export default ({ data }) => {
  const payload = JSON.parse(data.data.message)
  return (
    <div className='data-wrapper'>{payload.attachment.payload.elements.map((d, i) => (
      <div key={i} className='card'>
        <img src={d.image_url} className='data-img' />
        <p className='title'>{d.title}</p>
        <p className='subtitle'>{d.subtitle}</p>
        <div className='button-wrapper'>
          {d.buttons.map((b, i) => (
            <a key={i} className='button-content'>{b.title}</a>
          ))}
        </div>
      </div>
    ))}</div>
  )
}
