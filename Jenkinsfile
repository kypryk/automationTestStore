pipeline {
    agent any

    tools {nodejs "NodeJS"}

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Cypress run') {
            steps {
                sh 'npm run cy:run:allure'
            }
        }
        stage('Allure Report') {
            steps {
                sh 'npm run allure:generate'
            }
        }
    }
}