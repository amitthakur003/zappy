Zappy - AI Career Coach 🤖

Zappy is a comprehensive, full-stack AI Career Coach designed to empower you in your professional journey. Leveraging cutting-edge technologies like Next.js, Neon DB (PostgreSQL), Tailwind CSS, Prisma, Inngest, and Shadcn UI, Zappy provides an interactive dashboard to track career growth, analyze industry trends, and enhance your skills.

Key Features:

Industry Trend Analysis: Visualize the booming fields and current salary trends in your area through interactive graphs.
Skill Enhancement Recommendations: Receive AI-driven suggestions to improve your skills and increase your earning potential.
Interactive Dashboard: A user-friendly interface for tracking progress and accessing insights.
Industry Insights: Gain deeper understanding of industry dynamics with detailed graphical representations.
Resume Builder: Create professional resumes tailored to your career goals.
AI Interview Preparation: Practice mock interviews with AI-generated quizzes, powered by Gemini 2.0 Flash, and track your performance over time.
Secure User Authentication: Inngest is used to manage and secure user authentication processes.

🛠️ Tech Stack
Frontend:
. Next.js: For server-side rendering and a seamless user experience 🖥️.
. Shadcn UI: For beautiful and accessible UI components ✨.
. Tailwind CSS: For rapid and responsive styling 🎨.

Backend:
Node.js: For a scalable and efficient server environment.
Prisma: For type-safe database access.
Inngest: For reliable background job processing, event-driven tasks, and secure user authentication.

Database:
Neon DB (PostgreSQL): A fully managed serverless PostgreSQL database known for its speed and scalability.

AI Integration:
Google Gemini 2.0 Flash: Used for generating dynamic interview questions and providing real-time feedback in the AI Interview Prep feature.

⚙️ Inngest for User Authentication
Inngest plays a crucial role in Zappy's user authentication system. By leveraging Inngest's event-driven architecture, we ensure:
Secure Authentication Flows: Inngest allows for the creation of reliable and secure authentication workflows. 🛡️
Scalable User Management: Inngest can handle a growing number of users and authentication requests efficiently.
Background Tasks: Inngest handles background tasks related to authentication, such as token refreshing and session management, ensuring a smooth user experience.

🎤 Gemini 2.0 Flash Integration
The AI Interview Prep feature is powered by Google's Gemini 2.0 Flash ✨. This integration enables:

Dynamic Interview Questions: Gemini 2.0 Flash generates relevant and challenging interview questions tailored to the user's career field 🎯.
Real-time Feedback: Users receive instant feedback on their responses, highlighting areas for improvement 📢.
Personalized Learning: The AI adapts to the user's performance, providing increasingly challenging questions as they progress 🧠.

Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v18+) ✅
npm or yarn 📦
Git 🔗


Installation & Setup
1) Clone the Repository
[. git clone https://github.com/amitthakur003/zappy.git  
 . cd zappy  ]
 
2) Install Dependencies
[ . npm install  ]  # or yarn install
 
3) Set Up Environment Variables
Create a .env file and configure the database, authentication, and AI API keys:
[ . DATABASE_URL=your_neondb_connection_url  
  . REACT_APP_GEMINI_API_KEY=your_gemini_2_flash_api_key  
  . INNGEST_API_KEY=your_inngest_api_key  ]  

4) Run Database Migrations
[ . npx prisma migrate dev  ]

5) Start the Inngest Event Listener
[ . npx inngest-cli dev  ]
 
6) Run the Application
[ . npm run dev  ]  # or yarn dev


Your application will be available at http://localhost:3000 🌐

🧑‍💻 How to Use
Sign Up / Log In: Securely authenticate using Inngest 🔐.
Explore the Dashboard: View real-time insights into job market trends 📊.
Check Industry Insights: Analyze demand 📈, salary distributions 💰, and future growth 🚀.
Build Your Resume: Create a professional resume tailored to your skills 📄.
Prepare for Interviews: Take AI-generated mock quizzes using Gemini 2.0 Flash 🎤.
Enhance Your Skills: Get AI-driven recommendations to increase your career value 🧠.

🤝 Contributing
We welcome contributions! Follow these steps:

1) Fork the repository 🔗
2) Create a feature branch (git checkout -b feature-xyz) 🌿
3) Commit your changes (git commit -m "Add new feature") ✅
4) Push to your branch (git push origin feature-xyz) 🚀
5) Create a Pull Request 📩


📞 Contact
Email: reachthakuramit@gmail.com 📧

LinkedIn: https://www.linkedin.com/in/reachthakuramit 🔗

Instagram: https://www.instagram.com/amithakur_003/ 📸

Made with love by Amit Thakur💗

![Database Design](https://github.com/user-attachments/assets/1a9105d1-016c-48d5-9322-f455e706f5e3)
