// ─── PORTFOLIO DATA ───────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Sri Varun Singari",
  tagline: "Data Science & AI Portfolio",
  email: "srivarunsri999@gmail.com",
  phone: "+91-7032791760",
  location: "Hyderabad, India",
  domain: "srivarun.in",
  summary:
    "A passionate Data Science undergraduate focused on building intelligent, scalable, and impactful AI-powered solutions using Machine Learning, Data Analytics, and Full Stack Technologies. Dedicated to transforming data into meaningful insights and real-world applications.",
  roles: [
    "Data Science Student",
    "Machine Learning Engineer",
    "AI Enthusiast",
    "Full Stack Developer",
    "Data Analyst",
  ],
  socials: {
    github: "https://github.com/Srivarun999",
    linkedin: "https://www.linkedin.com/in/sri-varun-singari-bb06991bb/",
    leetcode: "https://leetcode.com/u/varun_9/",
    hackerrank: "https://www.hackerrank.com/profile/srivarunsri999",
    codechef: "https://www.codechef.com/users/srivarunsri999",
  },
};

export const education = [
  {
    degree: "B.Tech, Data Science",
    institution: "Institute of Aeronautical Engineering",
    location: "Hyderabad",
    period: "Oct 2022 – Present",
    score: "CGPA: 7.55",
    icon: "🎓",
    color: "from-purple-600 to-cyan-500",
  },
  {
    degree: "Intermediate, MPC",
    institution: "NSR Impulse Junior College",
    location: "Hyderabad",
    period: "Jun 2019 – Jun 2021",
    score: "Percentage: 93%",
    icon: "📚",
    color: "from-cyan-500 to-green-400",
  },
  {
    degree: "High School",
    institution: "Jawahar Navodaya Vidyalaya",
    location: "Sirpur-Kagaznagar",
    period: "Jun 2014 – Jun 2019",
    score: "CGPA: 7.4",
    icon: "🏫",
    color: "from-green-400 to-blue-500",
  },
];

export const skills = {
  technical: [
    { name: "Python", level: 90, category: "Languages" },
    { name: "SQL", level: 85, category: "Languages" },
    { name: "Java (Basics)", level: 60, category: "Languages" },
    { name: "Pandas", level: 88, category: "Libraries" },
    { name: "NumPy", level: 87, category: "Libraries" },
    { name: "Scikit-learn", level: 85, category: "Libraries" },
    { name: "TensorFlow", level: 78, category: "Libraries" },
    { name: "PyTorch", level: 72, category: "Libraries" },
    { name: "Matplotlib / Seaborn", level: 88, category: "Libraries" },
    { name: "Streamlit", level: 82, category: "Tools" },
    { name: "Power BI", level: 78, category: "Tools" },
    { name: "Tableau", level: 75, category: "Tools" },
    { name: "MySQL", level: 82, category: "Tools" },
    { name: "MongoDB", level: 65, category: "Tools" },
    { name: "Git", level: 80, category: "Tools" },
    { name: "React", level: 70, category: "Web" },
    { name: "Spring Boot", level: 65, category: "Web" },
  ],
  soft: [
    { name: "Leadership", icon: "👑" },
    { name: "Problem Solving", icon: "🧠" },
    { name: "Communication", icon: "💬" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Team Collaboration", icon: "🤝" },
    { name: "Project Management", icon: "📋" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Demand-Supply Gap Analysis",
    subtitle: "Revenue Loss Estimation in Retail",
    description:
      "Conducted Exploratory Data Analysis on Walmart sales data to identify demand–supply mismatches, built regression models for revenue loss estimation, and derived business insights for inventory optimization.",
    longDescription:
      "Applied EDA on Walmart retail datasets to uncover demand-supply gaps. Used Feature Engineering to enhance model performance. Built Linear Regression and Random Forest regression models for revenue loss estimation. Delivered actionable insights for inventory optimization and demand forecasting.",
    tags: ["Python", "EDA", "Random Forest", "Linear Regression", "Pandas", "Seaborn"],
    github: "https://colab.research.google.com/drive/1NflhC4EsvwCqb-dJzYbHWG06wbLHWNzR",
    demo: "https://colab.research.google.com/drive/1NflhC4EsvwCqb-dJzYbHWG06wbLHWNzR",
    category: "Machine Learning",
    color: "from-purple-600 to-blue-600",
    icon: "📊",
    featured: true,
  },
  {
    id: 2,
    title: "Loan Approval Prediction",
    subtitle: "Classification ML System",
    description:
      "Machine learning system for predicting loan approvals using Decision Tree and Random Forest algorithms with end-to-end data preprocessing and feature engineering.",
    longDescription:
      "Built an end-to-end loan approval prediction pipeline. Handled missing values, encoded categorical features, and applied feature engineering. Compared Decision Tree and Random Forest classifiers with thorough model evaluation metrics including accuracy, precision, recall, and F1 score.",
    tags: ["Decision Tree", "Random Forest", "Scikit-learn", "Feature Engineering", "Python"],
    github: "https://github.com/Srivarun999",
    demo: null,
    category: "Machine Learning",
    color: "from-cyan-600 to-purple-600",
    icon: "🏦",
    featured: true,
  },
  {
    id: 3,
    title: "Sales Prediction",
    subtitle: "CODSOFT – Regression Analysis",
    description:
      "Forecasted retail sales using Linear Regression, Random Forest, and Gradient Boosting. Achieved R² score of 0.92 after feature engineering.",
    longDescription:
      "Developed a retail sales forecasting pipeline using multiple regression algorithms. After rigorous feature engineering and hyperparameter tuning, achieved an R² score of 0.92 using Gradient Boosting. Visualized trends and predictions using Matplotlib and Seaborn.",
    tags: ["Gradient Boosting", "Linear Regression", "R² = 0.92", "Matplotlib", "Seaborn"],
    github: "https://github.com/Srivarun999",
    demo: null,
    category: "Machine Learning",
    color: "from-green-500 to-cyan-600",
    icon: "📈",
    featured: false,
  },
  {
    id: 4,
    title: "Climate Change Dashboard",
    subtitle: "Interactive Streamlit Visualization",
    description:
      "Interactive Streamlit dashboard visualizing CO₂ emissions, temperature trends, and climate analytics with automated reporting.",
    longDescription:
      "Built a fully interactive web dashboard using Streamlit to visualize climate change indicators. Integrated CO₂ emissions datasets, global temperature trends, and automated summary reports. Added dynamic filters and charts for exploratory analytics.",
    tags: ["Streamlit", "Data Visualization", "Climate Data", "Pandas", "Plotly"],
    github: "https://github.com/Srivarun999",
    demo: null,
    category: "Data Analytics",
    color: "from-blue-500 to-green-500",
    icon: "🌍",
    featured: false,
  },
  {
    id: 5,
    title: "Unsupervised Image Segmentation",
    subtitle: "Clustering & Computer Vision",
    description:
      "Interactive image segmentation tool using K-Means, K-Medoids, and hierarchical clustering with Elbow method and Silhouette score evaluation.",
    longDescription:
      "Implemented multiple unsupervised clustering algorithms (K-Means, K-Medoids, Hierarchical) for image segmentation. Used the Elbow method and Silhouette score to determine optimal clusters. Visualized segmented images and cluster analysis interactively.",
    tags: ["K-Means", "Clustering", "OpenCV", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/Srivarun999",
    demo: null,
    category: "Computer Vision",
    color: "from-purple-500 to-pink-500",
    icon: "🖼️",
    featured: false,
  },
  {
    id: 6,
    title: "Customer Churn Prediction",
    subtitle: "AI-Powered Business Intelligence",
    description:
      "AI-powered customer churn prediction system to identify customers likely to leave a service, with business analytics and data visualizations.",
    longDescription:
      "Built a classification pipeline to predict customer churn. Applied SMOTE for class imbalance, feature selection techniques, and compared Logistic Regression, Random Forest, and XGBoost models. Delivered visual dashboards for business insight.",
    tags: ["Classification", "XGBoost", "SMOTE", "Business Analytics", "Python"],
    github: "https://github.com/Srivarun999",
    demo: null,
    category: "Machine Learning",
    color: "from-orange-500 to-red-600",
    icon: "👥",
    featured: false,
  },
  {
    id: 7,
    title: "Corporate Employee Welfare Network",
    subtitle: "Full Stack Web Application",
    description:
      "Full-stack employee collaboration and welfare management platform built with Spring Boot, React, and MySQL.",
    longDescription:
      "Designed and developed a full-stack corporate employee welfare system. Backend built with Spring Boot and MySQL; frontend with React. Implemented authentication, employee profiles, team collaboration features, and welfare request management.",
    tags: ["Spring Boot", "React", "MySQL", "Full Stack", "REST API"],
    github: "https://github.com/Srivarun999",
    demo: null,
    category: "Full Stack",
    color: "from-indigo-500 to-cyan-600",
    icon: "🏢",
    featured: false,
  },
];

export const certifications = [
  {
    id: 1,
    title: "TensorFlow Developer Certificate",
    issuer: "DeepLearning.AI",
    date: "May 25, 2026",
    description: "Professional certification in TensorFlow for deep learning and neural network development.",
    color: "from-orange-500 to-red-500",
    icon: "🧠",
    badge: "⭐ Professional",
    image: "/certs/tensorflow-cert.jpg",
  },
  {
    id: 2,
    title: "Advanced Certificate in Data Science with Generative AI",
    issuer: "upGrad",
    date: "Feb 2026 – Present",
    description:
      "Advanced training in Python, ML, deep learning, and Generative AI with real-world project experience.",
    color: "from-purple-500 to-pink-500",
    icon: "🤖",
    badge: "✨ Advanced",
    image: "/certs/upgrad-cert.jpg",
  },
  {
    id: 3,
    title: "DSA using Python with LeetCode Exercises",
    issuer: "Udemy",
    date: "Apr 2025",
    description:
      "Structured training in Data Structures & Algorithms using Python with LeetCode problem-solving practice.",
    color: "from-cyan-500 to-blue-500",
    icon: "💡",
    badge: "🏆 Completed",
    image: "/certs/udemy-dsa.jpg",
  },
  {
    id: 4,
    title: "Data Science Internship",
    issuer: "CODSOFT",
    date: "May 2025",
    description:
      "Hands-on data science internship working on real-world projects including Titanic prediction, movie ratings, and sales analysis.",
    color: "from-green-500 to-teal-500",
    icon: "🔬",
    badge: "🎯 Internship",
    image: "/certs/codsoft-cert.jpg",
  },
  {
    id: 5,
    title: "Field Project",
    issuer: "NSIC",
    date: "Jan 2024 – Mar 2024",
    description:
      "Foundational data science skills in finance and retail dataset analysis, EDA, and ML workflow exposure.",
    color: "from-blue-500 to-indigo-500",
    icon: "🏭",
    badge: "📜 Certified",
    image: "/certs/nsic-cert.jpg",
  },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "varun_9",
    url: "https://leetcode.com/u/varun_9/",
    stats: "150+ Problems Solved",
    color: "from-yellow-500 to-orange-500",
    icon: "⚡",
    detail: "Active problem solver across Easy, Medium, Hard",
  },
  {
    platform: "HackerRank",
    username: "srivarunsri999",
    url: "https://www.hackerrank.com/profile/srivarunsri999",
    stats: "262 Hackos • 2 Badges",
    color: "from-green-500 to-teal-500",
    icon: "🏅",
    detail: "Python & Problem Solving badges earned",
  },
  {
    platform: "GitHub",
    username: "Srivarun999",
    url: "https://github.com/Srivarun999",
    stats: "Active Repositories",
    color: "from-gray-600 to-gray-800",
    icon: "🐙",
    detail: "ML projects, data science, and web development repos",
  },
  {
    platform: "CodeChef",
    username: "srivarunsri999",
    url: "https://www.codechef.com/users/srivarunsri999",
    stats: "Active Coder",
    color: "from-amber-600 to-amber-800",
    icon: "👨‍🍳",
    detail: "Regular competitive programming participant",
  },
];
