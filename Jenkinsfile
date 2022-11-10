pipeline {
    agent any

    tools {node js "NodeJS"}
    
    stages {
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