import './App.css';
import instagram from './assets/Instagram.png'
import Github from './assets/GitHub.png'
import LinkedIn from './assets/LinkedIn.png'
import vtf1 from './assets/vtf/home.PNG'
import vtf2 from './assets/vtf/info.PNG'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className='header'>
          <div className='container'>
            <h5><a><div className="profile"></div>Joshua Singontiko</a></h5>
          </div>
          <div className='container'>
            <a href='#contact'><p>Contact</p></a>
            <a href='https://docs.google.com/document/d/e/2PACX-1vS4J8dxmxGPrPZN5pFLQFW4fb0kTp5Q6YdDbR0qiQmSyYp9wRwkCg4KBlGFQ__zUzwGSWyBPOVmfvTb/pub' target='_blank'><p>Resume</p></a>
            <a href='#projects'><p>Portfolio</p></a>
          </div>
        </section>
      </header>
      <div className='App-body'>
        <section className="hero">
          <div className='container'>
            <div className="title-wrapper">
              <h1>Joshua Singontiko</h1>
              <p>Fullstack Developer | Designer</p>
              <button><a>Contact Me</a></button>
            </div>
            <div className="logo-wrapper">
              <a href='https://www.instagram.com/jsing.post/' target={'_blank'}><img src={instagram}></img></a>
              <a href='https://www.linkedin.com/in/josh-singontiko-3796681bb/' target='blank'><img src={LinkedIn}></img></a>
              <a href='https://github.com/josh2sing' target='_blank'><img src={Github}></img></a>
            </div>
          </div>
        </section>
        <section className='random-projects' id='projects'>
          <div className='container'>
            <h1><strong>PROJECTS</strong></h1>
            <div className='row'>
              <div className='project full' style={{backgroundImage: `url(${vtf1})`}}> <div className='text-wrapper'>
                <h3>VTF Info Page</h3>
                <p>Webpage re-styled using HTML/CSS</p>
                <div className='button-container'>
                  <a target='_blank' href='https://virtuallytestingfoundation.org/'><div className='projectlink'><p>LIVE</p></div></a>
                  <a target='_blank' href='https://github.com/Josh2sing/VTF-Landing-Page'><div className='projectlink'><p>CODE</p></div></a>
              </div>
              </div>
              
              </div>
              
              <div className='project full' style={{backgroundImage: `url(${vtf2})`}}> <div className='text-wrapper'>
                <h3>VTF Homepage</h3>
                <p>Webpage created using HTML/CSS using Javascript for animation</p>
                <div className='button-container'>
                  <a target='_blank' href='https://virtuallytestingfoundation.org/internships'><div className='projectlink'><p>LIVE</p></div></a>
                  <a target='_blank' href='https://github.com/Josh2sing/VTF-Landing-Page'><div className='projectlink'><p>CODE</p></div></a>
              </div>
              </div></div></div>
          </div>
        </section>
        <section className='contact' id='contact' netlify>
          <h1>Say Hello!</h1>
         <div className='container'>
            <form>
              <div className='row'>
              <div className='nameContainer col'>
                <input type='name' placeholder='Name'></input>
                <input type='email'  placeholder='Email'></input></div>
              <textarea name='message'  placeholder='Send me a Message'></textarea></div>
              <button>Submit</button>
              
            </form>
         </div>
        </section>
          </div>
      </div>
      );
}




      export default App;
