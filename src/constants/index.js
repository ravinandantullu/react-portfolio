import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  IdeaBytes,
  Planetart,
  Verizon,
  KForce,
  pointOfInterests,
  personalCreations,
  gifts,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sr. Software Engineer",
    company_name: "Planetart Inc",
    icon: Planetart,
    iconBg: "#383E56",
    date: "May 2020 - Present",
    points: [
      "Assisted in developing and maintaining software applications using C# and the .NET framework.",
      "Developed dynamic home page templates to support transition of the pages based on activation of the template on specific date and time.",
      "Used DynamoDB table to save the layout templates and widgets to support the transition of the different layouts.",
      "Build Rest API’s using .net core framework by implementing N-tier architecture for the application development with Presentation- Layer (UI), Data Access Layer (DAL) and Business logic layer (BLL).",
      "Created database tables, stored procedures, triggers, views, and functions in SQL Server.",
      "Involved in the complete Software Development Life Cycle (SDLC) including Analysis, Design, Implementation, Testing and Maintenance. ",
      "Involved in the Design of the application using MVC, WCF, Entity Framework, LINQ to SQL.",
      "Involved in developing the Front-End of the application using the asp.net framework 4.0 and HTML, CSS, Vuejs framework. ",
      "Implemented and extensively used the Object-Oriented programming concepts in C# and ASP. Net 4.0. ",
      "Involved in implementing the WCF configuration and parameter binding.",
      "Involved in Consuming WEB API in MVC by implementing the consumer Get, Post, Put, and Delete and implemented the Parameter Binding and Dependency Injection.",
      "Implemented the Rest API using WCF for building the Server-Side component and create DB context in the controller. ",
      "Implemented the WEB API service to validate the user payment processing for Credit, debit and online transactions.  ",
      "Involved in developing the Data Access Layer using the Entity Framework followed the code first process.  ",
      "Created the database tables using the code first approach in entity framework. ",
      "Used TFS (Team Foundation Server) for source Version Control and GIT.",
      "Involved in unit testing with N-Unit, Just-Mock, preparing System Test Cases, Documentation, Debugging, and bug fixing."
    ],
  },
  {
    title: "SoftWare Engineer",
    company_name: "KForce Inc",
    icon: KForce,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2020",
    points: [
      "	Involved in the complete Software Development Life Cycle (SDLC) including Analysis, Design, Implementation, Testing and Maintenance.",
      "	This application is developed in ASP.NET MVC 5 which involves business layer using the WCF service and call to the database.",
      "	Wrote stored procedures using Microsoft SQL Server, also worked with LINQ for .Net.",
      "	Created WCF services to create distributed applications and for communications between the server and the Client.",
      "	Involved in integrating the desktop application to Finance module application.",
      "	Used ADO.NET code to connect and make the required changes to the database and ADO.Net technology extensively for data retrieving, querying, storage, and manipulation.",
      "	Used Java Script, jQuery to perform client-side validation and consumed web services into the web application.",
      "	Involved in implementing the WEB API configuration, WEB API Routing and parameter binding.",
      "	and created WEB API for curd operation Get, Post, Put and Delete methods.",
      "	Involved in Consuming WEB API in MVC 5 by implementing the consume Get, Post, Put, and Delete and implemented the Parameter Binding and Dependency Injection.",
      "	Implemented the Rest API using WEB API 2 for building the Server-Side component and create DB context in the controller.",
      "	Involved in developing the Data Access Layer using the Entity Framework followed the code first process.",
      "	Involved in Creating the Triggers and Store Procedure by implementing the T-SQL queries.",
      "	Created the database tables using the code first approach in entity framework.",
      "	Used Angular JS to standardize web application structure and provide a future template and for data binding.",
      "	Wrote and executed the Test Cases using N-Unit testing framework to test functionality.",
      "	Responsible for gathering requirements from the end user and analysis.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Verizon",
    icon: Verizon,
    iconBg: "#383E56",
    date: "Jun 2017 - Mar 2020",
    points: [
      "	Designed and developed web user controls, master pages, validation controls, CSS files using C#.NET, jQuery, XML, HTML and ASP.NET 4.5.  ",
      "	Designed web forms using ASP.Net, developed different .NET assemblies using C#.NET classes. ",
      "	Build Entire Application using MVC employing Object Oriented Programming (OOP) concepts such as: encapsulation, inheritance, polymorphism, and abstraction.  ",
      "	Designing the screen according to the requirement and communicating with database using domain specific objects through ORM techniques like Entity Framework and LINQ To SQL for data access in MVC web application.  ",
      "	Wrote RDBMS objects like stored procedures, views and user defined functions using SQL Server 2008 and SQL server 2012.  ",
      "	Created & hosted WCF Services and used different bindings to make it available to different types of clients.  ",
      "	Used jQuery for client-side validations and event delegation to trigger the handlers.  ",
      "	Developed a utility to download tables from Oracle database to SQL Server. Wrote PL/SQL queries to access the result set.  ",
      "	Used ASP.NET User Controls to create steps for submitting and modifying events and evaluation forms. Used Cascading Style Sheets (CSS) to maintain design consistency across all web forms. ",
      "	Experience using Team foundation server for check in and checkout of code.  ",
      "	Created various Tables, custom views, indexes, and relations using SQL Server Management Studio Express.  ",
      "	Involved in code optimization and performance tuning of the application. Used JavaScript for validations and implemented business rules on the client side.",
      "	Involved in all the phases of Software Development Life Cycle such as analysis, design, and development. ",
    ],
  },
  {
    title: "Web UI Developer",
    company_name: "Verizon",
    icon: Verizon,
    iconBg: "#E6DEDD",
    date: "Aug 2016 - May 2017",
    points: [
      "	Developed multiple POCs to create a user interface in AngularJS.",
      "	Experience in working with Angular modules, components, services, templates, directives and dependency injection to create a SPA.",
      "	Involved in designing the user experience interface UI/UX strategy, UI requirements, converting findings into UI designs.",
      "	Leveraged MVC design pattern to organize AngularJS controllers, Custom directives, factories and views.",
      "	Worked on the REST/Web API to create the services and tested on postman and used in AngularJS $http, $q service calls and bind the data in the table using ng-repeat attributes.",
      "	Implemented Factory, Service and Provider to organize code and allow for easier future maintenance.",
      "	Developed Search Engine, line-chart, bar-chart, pie-chart directives, Checkbox directives, and other functionalities using AngularJS/D3.js (extensive usage of $scope, ng-controller, ng-model).",
      "	Used $http with Angular.JS interceptors to make sure the requests were valid and used ng-router to handle nested views and avoid page redirection.",
      "	Experience with JavaScript libraries like jQuery, D3.js, lodash.js for DOM manipulation.",
      "	Utilize Jasmine, Karma, Gulp, Grunt and NPM to build and test applications.",
    ],
  },
  {
    title: "Web UI Developer",
    company_name: "Ideabytes Software Pvt Ltd",
    icon: IdeaBytes,
    iconBg: "#E6DEDD",
    date: "Feb 2014 - June 2014",
    points: [
      "	Actively interacted with IT and Business team members to understand the technical functionality of the application.",
      "	Developed CRM application using JSP and Servlet’s.",
      "	Utilized SQL and PL/SQL for managing data.",
      "	Used Appium for generating the automation test scripts on the android devices.Implemented Maven script during the development and build process.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Ravi is a well rounded and very capable software engineer. Ravi started out working on only the frontend Javascript applications but then quickly ramped up on learning the backend C# codebase also. He supported the new .NET core applications as well as legacy .NET webform applications. Ravi is an engineer who always does a deep dive into the code as well as business requirements to make sure the deliverables are completed in a timely manner. Ravi's attention to detail has been wonderful especially when developing and maintaining large and complex solutions. Not only does he implement the requirements set out in the features, he also takes into consider how this feature may impact the overall application by thinking big picture. Ravi always helps other team members whether it's other software engineers, product managers, or devops engineers. He is friendly and approachable and I am glad I had the opportunity to work with him on my team.",
    name: "Dat",
    designation: "Lead Software Engineer",
    company: "Planetart Inc",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I had the opportunity to work directly with Ravi for a couple of years in as a PM for projects he was developing on. He is a very dedicated worker who strives to understand the needs of the project explicitly, in order to best resolve any issues before they arise. He's a pleasure to work with.",
    name: "Lynda",
    designation: "E-Commerce professional Porduct Manger",
    company: "Planetart Inc",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Ravi was an all-around great guy to work with - I always saw him someone I could go to when I needed guidance, or ideas. He was a definite leader on the team, and strived to push our team as far as we could go, supporting everyone along the way. His leadership and expertise really helps a company grow, and ensures the job is going to get done correctly the first time.He is technically very sound in .NET/Vue/SQL Server. Given a complete functionality including multiple pages, he will complete it in no time.",
    name: "Ghoutham",
    designation: "Lead Software Engineer",
    company: "Planetart inc",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Point of Interest",
    description:
      "Web-based platform that allows users to select the point of interests on the map which used the map quest library to show the results.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pointOfInterests,
    source_code_link: "https://ravinandantullu.github.io/mapbox-favorites/",
  },
  {
    name: "Personal Creations",
    description:
      "Web application that enables users to search for products and have a personalized products.",
    tags: [
      {
        name: ".net",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Vuejs",
        color: "red-text-gradient",
      },
    ],
    image: personalCreations,
    source_code_link: "https://www.personalcreations.com/",
  },
  {
    name: "Gifts",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: ".net",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Vuejs",
        color: "red-text-gradient",
      },
    ],
    image: gifts,
    source_code_link: "https://www.gifts.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
