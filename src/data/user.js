const INFO = {
	main: {
		title: "Kenneth Quek Personal Portfolio",
		name: "Kenneth Quek",
		email: "kennethqzw@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/kennethqzw",
		github: "https://github.com/Cocopuffff",
		linkedin: "https://www.linkedin.com/in/kquek/",
		instagram: "https://www.instagram.com/kennethqzw/",
		stackoverflow: "https://stackoverflow.com/users/20916913/cocopower",
		facebook: "https://www.facebook.com/kennethqzw/",
	},

	homepage: {
		title: "Full-stack developer, and loving human to my cat.",
		description:
			"As a full-stack developer, I have gained extensive exposure to a range of technologies including JavaScript, Java, Python, SQL, as well as frameworks such as Scrum, RESTful API, Bootstrap, React.js, Flask and Spring. My experience encompasses building web applications that are scalable, secure, and reliable, with expertise in deploying them through Azure. I find great satisfaction in tackling complex problems and continuously expanding my skill set. Writing code that is both high-quality and optimized for performance and maintainability is something I take great pride in. I am constantly seeking new challenges and opportunities that foster my growth as a developer.",
	},

	about: {
		title: "I’m Kenneth Quek. I live in Singapore, where I design the future.",
		description:
			"I've worked in Shanghai, China as a Sales Manager for five years. In my previous role, I successfully collaborated with a developer and played a pivotal round in implementing a cloud ERP solution, which enhanced customer order management, drove inter-departmental data transparency, and improving operational efficiency. This experience has motivated me to move back to Singapore to transition into tech career. I have worked on a variety of projects and I'm proud of the progress I've made since starting my coding journey in Dec 2022. Many of these projects are open-source and available for others to explore and contribute to. If you know of any exciting web development opportunities or have any advice to share, please feel free to reach out. Let's connect and explore the endless possibilities together!",
	},

	// articles: {
	// 	title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
	// 	description:
	// 		"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	// },

	projects: [
		{
			title: "Trader Joe",
			description:
				"Built a comprehensive algorithmic trading platform integrated with OANDA's trading services. The platform, developed using React.js, Flask, and PostgreSQL, enables traders to automate their Python trading strategies, monitor performance, and manage trades in real-time.",
			logo: "python.png",
			linkText: "View Project",
			link: "https://github.com/Cocopuffff/TraderJoe",
		},

		{
			title: "Save The Muffin",
			description:
				"Developed a MERN-stack food rescue application in collaboration with others. This platform showcases nearby food listings on a map, utilising react-leaflet for mapping, and integration with OneMap for geographical data.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/Cocopuffff/project3",
		},

		{
			title: "Fefi Finance",
			description:
				"Engineered a Trader’s Research Assistant application featuring chart analysis and generative AI news sentiment analysis, using React.js and integrated with APIs from Oanda, AirTable, and Groq",
			logo: "react.png",
			linkText: "View Project",
			link: "https://github.com/Cocopuffff/fefi-finance",
		},

		{
			title: "Sudoku",
			description:
				"Developed a Sudoku website utilizing a recursive algorithm to dynamically generate unique puzzles, implemented in JavaScript",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.png",
			linkText: "View Deployment",
			link: "https://cocopuffff.github.io/Sudoku/",
		},

		{
			title: "RAG Chat App",
			description:
				"Collaboratively developed a Retrieval Augmented AI chat interface, empowering users to extract insights from document repositories interactively using web socket, vector store, and Langchain",
			logo: "python.png",
			linkText: "Project unavailable for viewing",
			link: "#",
		},

		{
			title: "LLM Service App",
			description:
				"Built a Large Language Model service app capable of various offline document annotation and summarisation tasks leveraging Flask, Langchain and operationalising open-source AI models. Achieved this monumental task through dedicated self-learning, despite no prior experience in Python or MLOps.",
			logo: "python.png",
			linkText: "Project unavailable for viewing",
			link: "#",
		},

		{
			title: "Investment Calculator",
			description:
				"This React investment calculator app is built using components and React useState for state management, and is deployed via Vercel.",
			logo: "react.png",
			linkText: "View Project",
			link: "https://investment-calculator-mu.vercel.app/",
		},

		{
			title: "AWS deployment",
			description:
				"This Spring Boot project is hosted on AWS EC2, and built on a robust CI/CD pipeline leveraging AWS CodeDeploy and CodePipeline, as well as simple shell scripts. Notably, the pipeline seamlessly integrates with my GitHub repository, ensuring a streamlined and automated deployment process.",
			logo: "aws.png",
			linkText: "View Project",
			link: "https://github.com/Cocopuffff/bookStore",
		},

		{
			title: "Personal Portfolio",
			description:
				"This portfolio website that you are viewing borrows heavily from an open source React project by https://github.com/truethari/reactfolio. I have made customizations to personalize this to my needs and deploy on Vercel.",
			logo: "react.png",
			linkText: "View Project",
			link: "https://github.com/Cocopuffff/portfoliowebsite",
		},

		{
			title: "Shoe Dork",
			description:
				"An e-Commerce web app developed in collaboration with others using a whole host of technologies like Java Spring Boot MVC architecture and deployed via Azure. I played a pivotal role in building a robust shopping cart feature, creating front-end shop page functionality and achieving end-to-end API integration.",
			logo: "spring.png",
			linkText: "View Project",
			link: "https://github.com/Cocopuffff/FSDShoeDork",
		},

		{
			title: "ToDo List",
			description:
				"A ToDo List web app developed using Java Spring Boot MVC architecture and local MySQL Workbench serving as database. It has add, delete and view all ToDo's functionality.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/Cocopuffff/todolist",
		},

		{
			title: "Find My Hat",
			description:
				"A JavaScript console-based game built in six hours on Node.js using various npm package dependencies. This game generates levels randomly based on difficulty chosen and has a try again feature.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/Cocopuffff/JavaScript-Game",
		},

		{
			title: "Composite_II",
			description:
				"Recreation of Piet Mondrian’s Composition II in Red, Blue, and Yellow using Bootstrap.",
			logo: "bootstrap-logo-shadow.png",
			linkText: "View Project",
			link: "https://github.com/Cocopuffff/Composite-II",
		},

		{
			title: "Colmar Academy",
			description:
				"A mobile-first website that was built in an eight hours assessment using HTML and CSS only",
			logo: "css.png",
			linkText: "View Project",
			link: "https://github.com/Cocopuffff/ColmarAcademy",
		},

		{
			title: "Website Demos",
			description:
				"Showcasing mastery of foundational concepts of HTML and CSS via creation of various websites from scratch.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Mini-projects",
			link: "https://github.com/Cocopuffff/projectshowcase/tree/main",
		},
	],
};

export default INFO;
