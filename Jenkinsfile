pipeline {
    // agent any

    agent {
        docker {
            image 'composer:latest'
            image 'php:7.4-cli'

            // If you use SSH cloning you need this. TODO - look at tokens for private repos and http clone
            args '-v /etc/passwd:/etc/passwd:ro'
            // args '-e HOME -v $HOME/.ssh:$HOME/.ssh:ro -v /etc/passwd:/etc/passwd:ro -v /etc/group:/etc/group:ro'
        }
    }

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
