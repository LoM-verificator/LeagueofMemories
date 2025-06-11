<h1>Project Deployment Guide</h1>

<h2>Requirements</h2>
<ol>
  <li>
    <strong>MongoDB:</strong>
    Download and install from 
    <a href="https://www.mongodb.com/try/download/community" target="_blank">
      https://www.mongodb.com/try/download/community
    </a>
  </li>
  <li>
    <strong>Node.js and npm:</strong>
    Download and install from 
    <a href="https://nodejs.org/" target="_blank">
      https://nodejs.org/
    </a>
  </li>
</ol>

<h2>Installation</h2>
<ol>
  <li>Open a terminal in the root folder of this project.</li>
  <li>Run the following command to install dependencies and build the project:
    <pre><code>npm install && npm run build && cd server && npm install && cd ..</code></pre>
  </li>
</ol>

<h2>Running the Application</h2>
<ol>
  <li>
    In one terminal window, start the server:
    <pre><code>node server/index.js</code></pre>
  </li>
  <li>
    In a separate terminal window, start the client:
    <pre><code>npm run start</code></pre>
  </li>
</ol>

<h2>Notes</h2>
<ul>
  <li>Ensure MongoDB service is running before starting the server.</li>
  <li>The client and server must be run in separate terminal sessions.</li>
</ul>
