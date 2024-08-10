# 🚗 DriveRate

**DriveRate** is a web app designed to help users quickly estimate and compare car insurance rates based on factors like age, driving record, car make/model, and location. This project is currently in its MVP (Minimum Viable Product) state and is built with Next.js and TypeScript.

![image](https://github.com/user-attachments/assets/cccf1b8b-2c61-4d56-a668-aaf29237e0f5)

## 📑 Table of Contents

- [🚗 DriveRate](#-driverate)
  - [📑 Table of Contents](#-table-of-contents)
  - [🚀 Current State (MVP)](#-current-state-mvp)
    - [✨ Features](#-features)
    - [� Tech Stack](#-tech-stack)
    - [🛠️ Installation](#️-installation)
  - [📖 Usage](#-usage)
  - [🌟 Future Vision](#-future-vision)
  - [📄 License](#-license)
  - [🤝 Contributing](#-contributing)

## 🚀 Current State (MVP)

### ✨ Features

- **User Input Form**: Users can input their age, driving record, car make/model/year, and location to get an estimated insurance rate.
- **Mock API**: The app uses a mock API to simulate fetching insurance rates based on user inputs. This allows for testing and development without relying on live data sources.
- **Basic Rate Calculation**: DriveRate uses a simple algorithm to provide a general approximation of insurance rates, ideal for comparison purposes.
- **Responsive Design**: The interface is designed to work seamlessly across desktop and mobile devices.

### 💻 Tech Stack

**Frontend:**

- Next.js
- TypeScript
- shadcn/ui
- Tailwind CSS

**Deployment:**

- Vercel

**Future Integrations:**

- Supabase

### 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nick-neely/drive-rate.git
   cd DriveRate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open <http://localhost:3000> in your browser to see the app in action.

### 📖 Usage

To use the DriveRate application, follow these steps:

1. **Open the Application**:

   - Run the development server using `npm run dev`.
   - Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

2. **Fill Out the Form**:

   - Enter your age, driving record, car make/model/year, and location in the provided fields.

3. **Submit the Form**:

   - Click the "Submit" button to get an estimated insurance rate.
   - Note: The current version uses mock data for the rate calculation.

4. **View the Results**:
   - The estimated insurance rate will be displayed on the screen based on the input provided.

## 🌟 Future Vision

The goal of DriveRate is to evolve into a comprehensive tool that provides more accurate and detailed insurance rate estimates by integrating real-time data from various public APIs. Future enhancements include:

- **Integration with Live APIs**: Connect to real data sources for car information, driving records, and location-based risk factors.
- **Advanced Rate Calculation Models**: Implement more sophisticated algorithms to provide closer approximations of actual insurance rates.
- **User Profiles**: Allow users to save their data and view historical estimates for different vehicles.
- **Expanded Input Variables**: Include additional factors such as credit score, marital status, coverage types, vehicle safety features, and more to refine rate estimates.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top right of the repository page.
2. **Clone your fork**: Clone your forked repository to your local machine.

   ```bash
   git clone https://github.com/your-username/drive-rate.git
   cd drive-rate
   ```

3. **Create a new branch**:

   ```bash
   git checkout -b feature-branch
   ```

4. **Make your changes**: Implement your changes or new features.
5. **Commit your changes**: Commit your changes with a descriptive commit message.

   ```bash
   git commit -m 'Add some feature'
   ```

6. **Push to the branch** Push your changes to your forked repository.

   ```bash
   git push origin feature-branch
   ```

7. **Open a pull request**: Go to the original repository and open a pull request from your forked repository's branch.

---

_DriveRate is in active development, and your feedback is valuable. Feel free to open issues or suggest features._
