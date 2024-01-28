import Navbar from './Navbar';
import './App.css';
import Intro from './Intro';
import { Projects } from './Projects';
import Certificates from './Certificates'
import Socials from './Socials'
import Connect from './Connect';




function App() {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
      else {
        entry.target.classList.remove('show')

      }
    })
  })

  const hiddenElement = document.querySelectorAll('.hidden')
  hiddenElement.forEach((el)=>observer.observe(el));


  return (
    <div className="App">
      <Navbar />
      <Intro src="./pranav_picture.jpg" />
      <Projects />
      <Certificates />
      {/* <Socials/> */}
      <Connect />



    </div>
  );
}

export default App;
