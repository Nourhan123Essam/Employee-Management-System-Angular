# Employee Management System - Frontend

## 🚀 Overview

This is the **frontend** for the Employee Management System, built using **Angular**. It provides a responsive and user-friendly interface to interact with the **ASP.NET Core API Backend**. The application ensures secure access, proper routing, and smooth user experience by leveraging modern web development tools and best practices.

---

## 🎯 Features

### 🔒 **Authorization and Guards**
- Guards are implemented to **prevent unauthorized access** to protected pages of the website.  
- Only authenticated users can access sensitive pages like **employee management, project details, etc.**.

### 📱 **Responsive Design**
- The website is fully responsive, ensuring seamless usability across various devices (desktop, tablet, and mobile).
- **Bootstrap** is used for a modern, clean, and responsive design.

### 🔗 **API Integration**
- Services are used to connect with the backend **ASP.NET Core API**.
- All API calls for fetching, updating, and deleting data are handled through Angular services, promoting reusable and maintainable code.

### ⚙️ **Routing Configuration**
- Configured **Angular routes** to enable smooth navigation within the application.
- Modular and structured routing to support easy scalability.

### 📌 **Angular Best Practices**
- Use of **constants**, **classes**, and **interfaces** to ensure consistent and strongly typed code.
- Clean and modular folder structure to improve readability and maintainability.

### 🌍 **Environments**
- Different environment configurations (`environment.ts` and `environment.prod.ts`) are used for development and production setups.

---

## 🔗 Related Repositories

This frontend is built to work with the **backend repository**:  
- [Employee Management System - Backend](https://github.com/Nourhan123Essam/Employee-Management-System-API-ASP.Net)  

---

## 🛠️ Tech Stack

- **Framework**: Angular  
- **Styling**: Bootstrap  
- **Backend API**: ASP.NET Core  
- **Routing**: Angular Router  

---

## 🌟 Live Demo Video

Watch the full **project demonstration video** [here](https://drive.google.com/file/d/1kpFMNj2WzXkkxu-TtTXC4SMM6tIjSFhV/view?usp=sharing).  

---

## 📂 Project Structure

### Key Modules and Files:
- **Services**: Handles API calls for CRUD operations (e.g., `employee.service.ts`, `client.service.ts`).  
- **Guards**: Protect routes (e.g., `auth.guard.ts`).  
- **Components**: Modular components for each feature (e.g., `employee`, `client`).  
- **Environment Files**:
  - `environment.development.ts`: Configuration for the development environment (e.g., API base URL for local development). 
- **Routing**: Centralized in `app.routes.ts`.
- **Model Folder**: Contains **interfaces** and **classes** for entities.
- **Constants**: Stores some constant values.
- **Reusable-components**: Components that can receive data via **@Input()** and send data via **@Output()**, allowing easy communication between them.

---

## 📸 Screenshots

![ScreenShot](https://github.com/Nourhan123Essam/Employee-Management-System-Angular/blob/main/Demo%20Images%20of%20the%20project/Screenshot%2012.png)

![ScreenShot](https://github.com/Nourhan123Essam/Employee-Management-System-Angular/blob/main/Demo%20Images%20of%20the%20project/Screenshot%201.png)

![ScreenShot](https://github.com/Nourhan123Essam/Employee-Management-System-Angular/blob/main/Demo%20Images%20of%20the%20project/Screenshot%202.png)

![ScreenShot](https://github.com/Nourhan123Essam/Employee-Management-System-Angular/blob/main/Demo%20Images%20of%20the%20project/Screenshot%203.png)

![ScreenShot](https://github.com/Nourhan123Essam/Employee-Management-System-Angular/blob/main/Demo%20Images%20of%20the%20project/Screenshot%204.png)

![ScreenShot](https://github.com/Nourhan123Essam/Employee-Management-System-Angular/blob/main/Demo%20Images%20of%20the%20project/Screenshot%205.png)

![ScreenShot](https://github.com/Nourhan123Essam/Employee-Management-System-Angular/blob/main/Demo%20Images%20of%20the%20project/Screenshot%206.png)

![ScreenShot](https://github.com/Nourhan123Essam/Employee-Management-System-Angular/blob/main/Demo%20Images%20of%20the%20project/Screenshot%207.png)

![ScreenShot](https://github.com/Nourhan123Essam/Employee-Management-System-Angular/blob/main/Demo%20Images%20of%20the%20project/Screenshot%208.png)

![ScreenShot](https://github.com/Nourhan123Essam/Employee-Management-System-Angular/blob/main/Demo%20Images%20of%20the%20project/Screenshot%209.png)

![ScreenShot](https://github.com/Nourhan123Essam/Employee-Management-System-Angular/blob/main/Demo%20Images%20of%20the%20project/Screenshot%2010.png)

![ScreenShot](https://github.com/Nourhan123Essam/Employee-Management-System-Angular/blob/main/Demo%20Images%20of%20the%20project/Screenshot%2011.png)

---

## 💡 How to Run

### Prerequisites
- **Node.js** and **npm** installed on your system.  
- **Angular CLI** installed globally.  
- Clone the **backend repository** and run the backend API as mentioned [here](https://github.com/Nourhan123Essam/Employee-Management-System-API-ASP.Net).

### Steps:
1. Clone this repository:
   ```bash
   git clone https://github.com/Nourhan123Essam/Employee-Management-System-Angular.git

2. Install dependencies:
  ```bach
    npm install
  ```
3. Update the environment.development.ts file with the API URL of your backend:
   ```bach
   export const environment = {
    API_URL: "https://localhost:7094/api/"
    };
4. Run the project:
   ```bach
   ng serve --open

## 📬 **Let's Connect**  

- [LinkedIn](https://www.linkedin.com/in/nourhan-essam123/)  
- [LeetCode](https://leetcode.com/u/norhan123/)  
- [GitHub](https://github.com/Nourhan123Essam)
- [Gmail](nourhan.essam.makhlouf@gmail.com)



