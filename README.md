[![GitHub contributors](https://img.shields.io/github/contributors/Aman035/Decentralized-Sovereign-Identity?style=for-the-badge)](https://github.com/Aman035/Decentralized-Sovereign-Identity/contributors)
[![GitHub issues](https://img.shields.io/github/issues/Aman035/Decentralized-Sovereign-Identity?style=for-the-badge)](https://github.com/Aman035/Decentralized-Sovereign-Identity/issues)
[![GitHub forks](https://img.shields.io/github/forks/Aman035/Decentralized-Sovereign-Identity?style=for-the-badge)](https://github.com/Aman035/Decentralized-Sovereign-Identity/network)
[![GitHub stars](https://img.shields.io/github/stars/Aman035/Decentralized-Sovereign-Identity?style=for-the-badge)](https://github.com/Aman035/Decentralized-Sovereign-Identity/stargazers)
[![GitHub license](https://img.shields.io/github/license/Aman035/Decentralized-Sovereign-Identity?style=for-the-badge)](https://github.com/Aman035/Decentralized-Sovereign-Identity/blob/main/LICENSE)

<!-- PROJECT LOGO -->
<br />
<p align="center">
    <!-- <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
  <h3 align="center">Decentra ID</h3>
  <p align="center">
    <a href="https://decentralized-sovereign-identity-jhzsjc.argoapp.io/#/home">View Demo</a>
    ·
    <a href="https://github.com/Aman035/Decentralized-Sovereign-Identity/issues">Report Bug</a>
    ·
    <a href="https://github.com/Aman035/Decentralized-Sovereign-Identity/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#contract-code">Contract Code</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#hosting">Hosting</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
The project tends to offers a platform where a user can create any self-sovereign decentralized digital identity, verify them cryptographically and share them in secured encrypted form with Zero Knowledge Proof.
<p align="center">
<img src="public\assets\flow.png"/>

</p>
#### Contract Code
Contract is deployed on Polygon Mumbai testnet.
Contract Address -  [View on PolygonScan](https://mumbai.polygonscan.com/address/0xFbD45EFD350dDC7953F3DbEe9B1E5E233b567845)
0xFbD45EFD350dDC7953F3DbEe9B1E5E233b567845 

#### Built With

* ReactJS 
* Redux
* Stylings - Material UI , Bootstrap , React Spring
* Wallet Integrations - Metamask
* Solidity
* Test Cases - Mocha And Chai

#### Hosting
[Using Spheron](https://docs.spheron.network/)

https://decentralized-sovereign-identity-jhzsjc.argoapp.io/

<!-- Installation -->
## Installation
1. Clone the repo
```sh
git clone https://github.com/Aman035/Decentralized-Sovereign-Identity.git
```
#### Frontend

1.2. Install NPM packages
   ```sh
   npm install
   ```
1.3. Start the React App
   ```sh
   npm start
   ```

#### Contracts

2.2 Go to Contract Directory
   ```sh
   cd contract
   ```
2.2 Insall packages using truffle
   ```sh
   truffle init
   ```
1.2. For running test cases start local test net Instance on port 8545 using Ganache
   ```sh
   truffle test
   ```
1.3. To compile the contarcts
   ```sh
   truffle compile
   ```
1.3. To deploy the contracts add a .env file with the following variables
   ```sh
   PRIVATE_KEY=YOUR_ETHEREUM_ACCOUNT_PRIVATE_KEY
   NETWORK=RPC_URL_OF_NETWORK
   ```
   ```sh
   truffle deploy --network NEWTWORK_NAME
   ```
</br>
</br>
This project was started by <a href="https://github.com/Aman035">Aman</a> & <a href="https://github.com/Nilesh46">Nilesh</a> during <a href="https://hackathon.money/">Hack Money Hackathon</a>.