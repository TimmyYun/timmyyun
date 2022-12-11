import React,{useState, useEffect} from 'react'

const Projects = () => {

  let [projects, setProjects] = useState([])

  useEffect(()=>{
    getProjects()
  }, [])

  let getProjects = async()=>{
    let responce = await fetch('http://127.0.0.1:8000/projects/')
    let data = await responce.json()
    console.log("DATA:", data)
    setProjects()
  }

  return (
    <div>
      Projects
    </div>
  )
}

export default Projects
