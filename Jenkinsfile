pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install -g newman'
                }
            }
        }

        stage('Run API Tests') {
            steps {
                script {
                    bat 'newman run collection.json -d csv_url.csv -r html'
                }
            }
        }
}

        post {
        always {
            echo 'API test execution completed'
        }
    }
}