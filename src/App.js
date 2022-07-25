import logo from './logo.svg';
import './App.css';
import head from './Coponents/head'
import instagram from './assets/Instagram.png'
import Github from './assets/GitHub.png'
import LinkedIn from './assets/LinkedIn.png'
import poster1 from './assets/posters/39.png'
import poster2 from './assets/posters/90.png'
import poster3 from './assets/posters/242.png'
import poster4 from './assets/posters/184.png'

let card = document.querySelector(".card");

window.addEventListener("scroll", () => {
  var top = window.pageYOffset / 10;
  card.style.transform = 'rotate3d(0,0,0 ' + top + 'deg)';
});

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
            <a><p>Portfolio</p></a>
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
        <section className='random-projects'>
          <div className='container'>
            <h1><strong>PROJECTS</strong></h1>
            <div className='row'> <div className='project'>
              <div className='text-wrapper'>
                <h3>Poster 39</h3>
                <p>Poster created using Photoshop and Illustrator</p>
              </div>
              <img src={poster1}></img>
            </div>
              <div className='project'> <div className='text-wrapper'>
                <h3>Poster 90</h3>
                <p>Poster created using Photoshop and Illustrator</p>
              </div><img src={poster2}></img></div></div>
            <div className='row'>
              <div className='project'> <div className='text-wrapper'>
                <h3>Poster 242</h3>
                <p>Poster created using Photoshop and Illustrator</p>
              </div><img src={poster3}></img></div>
              <div className='project'> <div className='text-wrapper'>
                <h3>Poster 184</h3>
                <p>Poster created using Photoshop and Illustrator</p>
              </div><img src={poster4}></img></div></div>
          </div>
        </section>
        <section className='contact' id='contact'>
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
