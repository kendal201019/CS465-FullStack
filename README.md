# CS465-FullStack
CS-465 Full Stack Development with MEAN 

Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?
    In our project for Travlr Getaways, we used Express for server-side rendering with HTML and JavaScript, which generates and serves dynamic content on      the server. This method, while effective for simpler pages, involves full page reloads, potentially slowing down user interactions. In contrast, we        implemented Angular as a single-page application (SPA), which updates content dynamically on the client side without reloading the entire page,            providing a smoother and more interactive user experience.
    For the backend, we chose MongoDB, a NoSQL database, for its flexibility and scalability. MongoDB’s schema-less design allows for easy adjustments to      data structures, and its ability to handle large amounts of data and traffic efficiently makes it ideal for our application’s needs, ensuring fast         performance and scalability.


Functionality
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
    JSON differs from JavaScript in that it is a data format used for storing and exchanging information, while JavaScript is a programming language that      manipulates data and performs actions within a web application. JSON provides a lightweight, text-based format that is easy for both humans to read        and machines to parse. It acts as a bridge between the frontend and backend by allowing data to be serialized and transmitted from the server to the       client and vice versa. During the development of our full stack application, we refactored code to enhance efficiency, such as optimizing API queries      and improving state management in the Angular SPA. These changes led to faster data retrieval and better performance. Additionally, implementing           reusable UI components in Angular, like custom buttons, improved development efficiency and consistency across the application, reducing                   redundancy and simplifying maintenance.

Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
    In testing our full stack application, I focused on verifying that each API endpoint worked as intended for various request methods. This included GET     requests for data retrieval, POST for creating records, PUT for updating, PATCH for partial changes, and DELETE for record removal. I tested these         methods to ensure they handled data correctly and returned the expected responses and status codes.
    Security testing was also crucial. I made sure that endpoints were protected from common vulnerabilities like SQL injection and XSS. This involved         checking that our authentication mechanisms, such as secure login procedures and role-based access controls, were effectively preventing unauthorized      access. Ensuring these security measures were in place helped protect user data and maintain the application's integrity.

Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
    This course has been instrumental in advancing my professional goals by providing hands-on experience with the MEAN stack and full stack development.      I’ve learned to integrate front-end and back-end components, manage databases, and implement secure authentication. These skills, along with my            understanding of scalable architecture and performance optimization, make me a more competitive candidate in web development.
