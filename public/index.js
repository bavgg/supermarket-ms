import { Sidebar } from "./ui/Sidebar.js";

function Home() {
  return `
    <h3>Hello, Admin!</h3>

    <div>Stats:</div>

    <h4>Earnings</h4>
    <p>Overall Earnings: PHP 4000</p>

    <h4>Profits</h4>
    <p>Overall Profits: PHP 4000</p>
  `;
}

function Body() {
  return `
        ${Sidebar()}
        <main id="main-container">
        
        </main>
    `;
}

const body = document.querySelector("body");
body.innerHTML = Body();

const main_container = document.querySelector("main");
main_container.innerHTML = Home();
