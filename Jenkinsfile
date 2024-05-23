pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                git 'https://github.com/aarie33/laravel-inertia-react.git'
                sh 'composer install'
                sh 'cp .env.example .env'
                sh 'php artisan key:generate'
            }
        }
    }
}
