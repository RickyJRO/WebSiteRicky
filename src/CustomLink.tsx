import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import react from './assets/react.png'
interface IProps {
  to: string
  name: string
  onClick: any
}
export default function CustomLink(props: IProps) {
  const { to, name, onClick } = props
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <div>
      <Link
        {...props}
        onClick={() => {
          onClick()
        }}
      >
        
          <p style={match ? {color:'rgb(46, 219, 250)'} : {color:'#fff'}} className="navLinks">{name} </p>
        
      </Link>
    </div>
  )
}
