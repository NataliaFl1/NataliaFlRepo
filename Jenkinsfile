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
                    sh 'npm install -g newman'
                }
            }
        }

        stage('Run API Tests') {
            steps {
                script {
                    sh 'newman run collection.json -d csv_url.csv -r html'
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