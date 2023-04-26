import './App.css';
import synthSplash from './images/synthsplash.jpeg';
import tdSplash from './images/tdsplash.png';
import vorSplash from './images/vorappsplash.png';
import compleetlySplash from './images/compleetlysplash.png';
import tandemSplash from './images/tandemsplash.png';
import goodreadsSplash from './images/goodreadssplash.png';
import about from './images/about.JPG';
import avatar from './images/avatar.jpg'

function App() {
  return (
  <div>
  <head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  </head>
	<body class="is-preload">

			<div id="header">

				<div class="top">

						<div id="logo">
							<span class="image avatar48"><img src={avatar} alt="" /></span>
							<h1 id="title">Eugene Birondo</h1>
							<p>Software Developer</p>
						</div>

						<nav id="nav">
							<ul>
								<li><a href="#top" id="top-link"><span class="icon solid fa-home">Intro</span></a></li>
								<li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">Portfolio</span></a></li>
								<li><a href="#about" id="about-link"><span class="icon solid fa-user">About Me</span></a></li>
								<li><a href="#contact" id="contact-link"><span class="icon solid fa-envelope">Contact</span></a></li>
							</ul>
						</nav>

				</div>

				<div class="bottom">

						<ul class="icons">
							<li><a target="_blank" href="https://angel.co/u/eugene-birondo" class="icon brands fa-angellist"><span class="label">AngelList</span></a></li>
							<li><a target="_blank" href="https://www.linkedin.com/in/eugene-birondo/" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
							<li><a target="_blank" href="https://github.com/jbirondo" class="icon brands fa-github"><span class="label">Github</span></a></li>
							<li><a target="_blank" href="mailto: jbirondo@gmail.com" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
						</ul>

				</div>

			</div>

			<div id="main">

					<section id="top" class="one dark cover">
						<div class="container">

							<header>
								<h2 class="alt">Hi! I'm <strong>Eugene Birondo</strong> <br/>Software Developer in the SF Bay Area</h2>
								<p>Early in my career I sought to help those with mental illness develop action plans and problem-solve.<br/> 
								Now, as a software developer I am looking for new problems to tackle. </p>
							</header>

							<footer>
								<a href="#portfolio" class="button scrolly">See my work</a>
							</footer>

						</div>
					</section>

					<section id="portfolio" class="two">
						<div class="container">

							<header>
								<h2>Portfolio</h2>
							</header>

							<p>Here is a sampling of my work.</p>

							<div class="row">
								<div class="col-4 col-12-mobile">
									<article class="item">
										<a target="_blank" href="https://synth-chatbot.herokuapp.com/" class="image fit"><img src={synthSplash} alt="" /></a>
										<header>
											<h3>Synth-Bot</h3>
										</header>
									</article>
									<article class="item">
										<a target="_blank" href="https://jbirondo.github.io/dist/index" class="image fit"><img src={tdSplash} alt="" /></a>
										<header>
											<h3>Canvas Tower Defense</h3>
										</header>
									</article>
								</div>
								<div class="col-4 col-12-mobile">
									<article class="item">
										<a target="_blank" href="https://vordraftapp.herokuapp.com/" class="image fit"><img src={vorSplash} alt="" /></a>
										<header>
											<h3>Value Over Replacement <br/>Fantasy Football Draft Aid</h3>
										</header>
									</article>
									<article class="item">
										<a target="_blank" href="https://compleetly.onrender.com/" class="image fit"><img src={compleetlySplash} alt="" /></a>
										<header>
											<h3>Compleetly</h3>
										</header>
									</article>
								</div>
								<div class="col-4 col-12-mobile">
									<article class="item">
										<a target="_blank" href="https://trivia-app-0h06.onrender.com" class="image fit"><img src={tandemSplash} alt="" /></a>
										<header>
											<h3>It Takes Two to Tandem: <br/>The singleplayer trivia game</h3>
										</header>
									</article>
									<article class="item">
										<a target="_blank" href="https://quiet-shore-31528.herokuapp.com/#/" class="image fit"><img src={goodreadsSplash} alt="" /></a>
										<header>
											<h3>BadReads</h3>
										</header>
									</article>
								</div>
							</div>

							<footer>
								<a target="_blank" href="https://docs.google.com/document/d/16-v0y1aZjl3brfPCpOeVOK1A_m_-AGuYYDInbIlZkE4/edit?usp=sharing" class="button scrolly">See my resume</a>
							</footer>

						</div>
					</section>

					<section id="about" class="three">
						<div class="container">

							<header>
								<h2>About Me</h2>
							</header>

							<p>
								I was born and raised in the SF Bay Area, attended San Jose State University where I received a 
								BS in Justice Studies, and went on to work with the mentally ill in sub-acute hospital and community 
								residential settings. My work with the mentally ill helped me engage with individuals striving for 
								independence and developing a sense of agency who allowed me to help them create plans 
								to achieve their goals. Their success made me want to expand my ability to positively impact others 
								so I sought training in a platform that could broaden my reach: <strong>Software Development</strong>. 
								Since making that decision, I have attended App Academy to sharpen my skills in computer science and modern 
								web development and I am now open to new opportunies to help people achieve their goals with this new skillset.
							</p>

							<a href="#" class="image featured"><img src={about} alt="" /></a>

							<p>Proficient in: Java, Spring, Springboot, Ruby, Ruby on Rails, JavaScript, React, Python, Redux, SQL, mongoDB, Kafka, Docker, GraphQL, Linux, and Unix.
							<br/>Also proficient in: Taking my dogs to the park, hiking and exploring the outdoors, sous vide and smoking meats.</p>

						</div>
					</section>

					<section id="contact" class="four">

						<div class="container">

							<header>
								<h2>Contact</h2>
							</header>
							<form method="post" action="#">
								<div class="row">
									<div class="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" /></div>
									<div class="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" /></div>
									<div class="col-12">
										<textarea name="message" placeholder="Message"></textarea>
									</div>
									<div class="col-12">
										<input type="submit" value="Send Message" />
									</div>
								</div>
							</form>

						</div>
					</section>

			</div>
			<div id="footer">

					<ul class="copyright">
						<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>

			</div>

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
  </div>
  );
}

export default App;
