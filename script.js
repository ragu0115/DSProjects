document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Hotel Data Dashboard Solution through AWS and PowerBI',
            description: 'Built a PowerBI Dashboard that showcases Hotel Data metrics by sourcing data from AWS Database.',
            githubLink: 'https://github.com/ragu0115/HotelDataAnalysis',
            skills: 'PowerBI, SQL, AWS (S3, Glue, Redshift)'
        },
        {
            title: 'AgTech ML Solution: Classifying Plant Seedlings using Computer Vision',
            description: 'Built a convolution neural network that classifies seedlings into their respective species.',
            githubLink: 'https://github.com/ragu0115/AgTech_CV_Classification/blob/main/AgTech_CNN_Plant_Seedling_Classification.ipynb',
            skills: 'Numpy, Pandas, Seaborn, Sci-Kit Learn, Tensorflow, Convolution Neural Networks, Image Processing'
        },
        {
            title: 'Banking ML Solution: Predicting Customer Churn',
            description: 'Built a neural network based classifier that can determine whether a customer will leave in 6 months or not.',
            githubLink: 'https://github.com/ragu0115/NN_Customer_Classification/blob/main/NN_Customer_Classification.pdf',
            skills: 'Numpy, Pandas, Seaborn, Sci-Kit Learn, Tensorflow, Keras, Artificial Neural Networks, Exploratory Data Analysis, Data Preprocessing'
        },        
        {
            title: 'Credit Card User Churn Prediction ML Solution',
            description: 'Built a prediction model that will help the bank predict if a customer will renounce their credit cards and their reasons.',
            githubLink: 'https://github.com/ragu0115/ML_Churn_Classification/blob/main/Customer_Classification.ipynb',
            skills: 'Numpy, Pandas, Seaborn, Sci-Kit Learn, Random Forest, Bagging, Boosting, SMOTE, Cross Validation, Hyperparameter Tuning'    
        },
        {
            title: 'Loan Approval Prediction ML Solution',
            description: 'Built a model that will help the marketing department to identify the potential customers who have a higher probability of purchasing the loan.',
            githubLink: 'https://github.com/ragu0115/ML_Loan_Approval/blob/main/Loan_Approval_Prediction_Modeling.ipynb',
            skills: 'Numpy, Pandas, Seaborn, Sci-kit Learn, Decision Trees, Exploratory Data Analysis, Data Preprocessing'
        }
    ];

    const projectsContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.githubLink}" target="_blank">View on GitHub</a>
            <h2></h2>
            <h4>Skills: ${project.skills} </h4>
        `;
        projectsContainer.appendChild(projectElement);
    });
});
