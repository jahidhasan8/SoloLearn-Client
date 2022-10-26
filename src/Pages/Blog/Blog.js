import React from 'react';

const Blog = () => {
    return (
        <div className='p-5 '>
            <h4>1. What is Cors?</h4>
            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari.</p>
            <br />

            <h4>2. Why are you using firebase?What other options do you have to implement authentication?</h4>
            <p>Firebase helps to develop high-quality apps, grow your user base. Each feature works independently, and they work even better together.Firebase is an all-in-one backend as a service provider (BaaS) that provides a database, authentication, and cloud storage among its many services.Firebase is great for quick projects: it’s easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections. The drawback is that you have to organize your app to be as simple as possible i.e. read and write operations without complicated business logic <br /> <span className='fw-semibold'>Other options are:</span> Auth0, MongoDB, Passport, Okta,keycloak, JSON Web Token, Amazon Cognito are the most popular alternatives and competitors to Firebase Authentication.</p>
            <br />

            <h4>3. How does the private route work?</h4>
            <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.The react private route component renders child components (children). Another example- if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            <br />
            
            <h4>4. What is Node? How does Node work?</h4>
            <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.A node is the basic building block of a web page. All HTML elements (div, a, p) are nodes, as well as document, text, attributes.Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br /> <br />Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

              <br />  Node.js basically works on two concept :

                Asynchronous and
                Non-blocking I/O <br /> <span className='fw-semibold'>Non-blocking I/o:</span>  Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works. <span className='fw-semibold'>Asynchronous: Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.</span></p>

        </div>
    );
};

export default Blog;