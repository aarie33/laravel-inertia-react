pipeline {
    // agent any

    // agent {
    //     docker {
    //         // image 'composer:latest'
    //         image 'php:7.4-cli'

    //         // If you use SSH cloning you need this. TODO - look at tokens for private repos and http clone
    //         args '-v /etc/passwd:/etc/passwd:ro'
    //         // args '-e HOME -v $HOME/.ssh:$HOME/.ssh:ro -v /etc/passwd:/etc/passwd:ro -v /etc/group:/etc/group:ro'
    //     }
    // }

    // stages {
    //     stage('Build') {
    //         steps {
    //             git 'https://github.com/aarie33/laravel-inertia-react.git'
    //             sh 'composer install'
    //             sh 'cp .env.example .env'
    //             sh 'php artisan key:generate'
    //         }
    //     }
    // }

    agent none // No default agent, each stage will define its own

    stages {
        stage('Build PHP Application') {
            agent {
                docker {
                    image 'php:7.4'
                }
            }
            steps {
                sh 'cp .env.example .env'
            }
        }
        
        stage('Install Composer Dependencies') {
            agent {
                docker {
                    image 'composer:latest'
                    args '-v /etc/passwd:/etc/passwd:ro'
                }
            }
            steps {
                git 'https://github.com/aarie33/laravel-inertia-react.git'
                sh 'composer install'
                sh 'php artisan key:generate'
            }
        }

        stage('Build Node.js Application') {
            agent {
                docker {
                    image 'node:14'
                }
            }
            steps {
                sh 'npm install'
                sh 'npm run prod'
            }
        }
    }
}
