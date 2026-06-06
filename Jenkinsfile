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
                    bat 'newman run collection.json -d csv_url.csv -r html --suppress-exit-code'
                }
            }
        }
}

        post {
        always {
            echo 'API test execution completed'
        }
	    publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'newman',
                reportFiles: '*.html',
                reportName: 'Newman API Report',
                reportTitles: ''
            ])
    }
}