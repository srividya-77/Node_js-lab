# Node_js-lab

A series of web technology lab experiments covering JavaScript, Java servlets, and Node.js.

## What it does

Each experiment is self-contained in its own folder:

| Folder | What it covers |
|--------|----------------|
| `exp-1` | Multi-page e-commerce mockup — register, login (credentials in `localStorage`), product catalog, and cart |
| `exp-2` | Static HTML pages for a ticket booking flow: home, booking, and payment |
| `exp-3` | Login form with client-side validation (minimum length checks for username and password) |
| `exp-4` | Weather app that calls the OpenWeatherMap API and displays temperature and description |
| `exp-5` | Java program that connects to a MySQL database and inserts/reads a `student` record using JDBC |
| `exp-6` | XML file (`movies.xml`) — data only, no processing code |
| `exp-7` | Java servlet that checks hardcoded admin credentials and responds accordingly |
| `exp-8` | Java snippet demonstrating how to set an HTTP cookie in a servlet response |
| `exp-9` | Minimal Node.js HTTP server that returns the OS platform at `/os` and "Hello NodeJS" on any other route |

## Built with

- Vanilla HTML, CSS, JavaScript (exp-1 through exp-4)
- Java + JDBC (exp-5)
- Java Servlets (`javax.servlet`) (exp-7, exp-8)
- Node.js built-in `http` and `os` modules (exp-9)

## How to run

**Browser experiments (exp-1, exp-2, exp-3):** Open the HTML file directly in a browser.

**Weather app (exp-4):** Open `index.html` in a browser. The API key is hardcoded in `weather.js`.

**Node.js server (exp-9):**
```bash
cd exp-9
node server.js
# Visit http://localhost:3000 or http://localhost:3000/os
```

**Java experiments (exp-5, exp-7, exp-8):** Require a Java development environment. Exp-5 also requires a running MySQL instance with a `test` database and a `student` table. Exp-7 and exp-8 require a servlet container such as Apache Tomcat.
