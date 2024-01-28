import React from 'react'
import { SubProject } from './SubProject'

export const Projects = () => {
  return (
    <div className='desc'>
        <h2>Projects</h2>
        <div className='app-box'>
        <SubProject name="Dart-Music App" tech="HTML CSS JavaScript"  link="https://prrrrnav.github.io/Dart-Github/index.html#" />
        <SubProject name="News App" tech="HTML CSS JavaScript React"  link="" />
        <SubProject name="Weather App" tech="HTML CSS JavaScript React"  link="" />
        <SubProject name="E-Commerce Store" tech="HTML CSS JavaScript React" link=""  />
        </div>
    </div>
  )
}
