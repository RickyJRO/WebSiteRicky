import { motion } from 'framer-motion'
import React, { useState } from 'react'

import './index.css'

interface IProps {
  image: string
  projectName: string
  projectDescription: string
  stacks: {
    name: string
    image: string
  }[]
  responsabilityDescription: string
  projectLink?: string
}
export default function Card(props: IProps) {
  const {
    image,
    projectName,
    projectLink,
    projectDescription,
    stacks,
    responsabilityDescription,
  } = props
  const [techsVisibility, setTechsVisibility] = useState(false)

  return (
    <motion.div
      className="cardContainer"
      onClick={() => {
        setTechsVisibility(!techsVisibility)
      }}
      style={{ backgroundImage: `url("${image}")`,backgroundPosition:'center' }}
    >
      {techsVisibility && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="cardTechContet"
        >
          <div className="cardTechContainer">
            <div>
              <p className="projectName">{projectName}</p>
              <p className="projectDescription">{projectDescription}</p>
            </div>
            <div>
              <p className="responsabilityTitle">Responsabilities</p>
              <p className="responsabilityDescription">
                {responsabilityDescription}
              </p>
            </div>
            <div className="projectStack">
              <p className="stackTitle">Stack</p>
              <div className="stackContainer">
                {stacks.map((e) => {
                  return (
                    <div className="stack">
                      <img className="stackImage" src={e.image} alt="" />
                      {e.name}
                    </div>
                  )
                })}
              </div>
            </div>
            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                className="projectLink"
               
              >
                Project Link
              </a>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
