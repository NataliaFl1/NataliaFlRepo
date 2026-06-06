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
                    // Встановлення залежностей для тестування API
                    sh 'npm install -g newman'
                }
            }
        }

        stage('Run API Tests') {
            steps {
                script {
                    // Запуск тестів API за допомогою Newman та колидація з кодом виходу
                    sh 'newman run collection.json -d csv_url.csv -r html'
                }
            }
        }

        post {
        always {
            // Додаткові дії, які виконуються завжди, навіть якщо є помилки
            echo 'API test execution completed'
        }
    }
}
}
