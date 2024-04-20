import React from 'react'

export default function About() {
    let aboutStyle={
        minHeight: "71vh",
        margin: "40px auto"
    }
  return (
    <div className='container' style={aboutStyle}>
      <h3>This is about page</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non quaerat tempore nisi vero, facere iure ducimus, suscipit magnam doloribus necessitatibus accusantium laborum quas ullam iusto minus ipsam exercitationem? Iste eius harum assumenda consequuntur.</p>
    </div>
  )
}
