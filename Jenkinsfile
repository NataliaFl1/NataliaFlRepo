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
                    npm install
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

        stage('Build and Deploy') {
            steps {
                script {
                    // Додаткові кроки збирання та розгортання
                }
            }
        }
    }

    post {
        always {
            // Виконується завжди, навіть якщо є помилки
            script {
                // Додаткові кроки або повідомлення про завершення пайплайну
            }
        }
    }
}