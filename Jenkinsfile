pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }
        stage('Install Backend Dependencies') {
            agent {
                docker {
                    image 'php:7.4-cli'
                    args '-u root -v /www/wwwroot/test-larareact.dafidea.com:/var/www/html'
                }
            }
            steps {
                script {
                    // Move to the project directory
                    dir('/var/www/html') {
                        // Install PHP dependencies
                        sh 'apt-get update && apt-get install -y sudo'
                        sh 'curl -sS https://getcomposer.org/installer | php'
                        sh 'php composer.phar install'
                    }
                }
            }
        }
        stage('Install Frontend Dependencies') {
            agent {
                docker {
                    image 'node:16-buster-slim'
                    args '-u root -v /www/wwwroot/test-larareact.dafidea.com:/var/www/html'
                }
            }
            steps {
                script {
                    // Move to the project directory
                    dir('/var/www/html') {
                        // Install Node.js dependencies
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Build Frontend') {
            agent {
                docker {
                    image 'node:16-buster-slim'
                    args '-u root -v /www/wwwroot/test-larareact.dafidea.com:/var/www/html'
                }
            }
            steps {
                script {
                    // Move to the project directory
                    dir('/var/www/html') {
                        // Build the frontend assets
                        sh 'npm run dev' // or npm run production
                    }
                }
            }
        }
        stage('Run Tests') {
            agent {
                docker {
                    image 'php:7.4-cli'
                    args '-u root -v /www/wwwroot/test-larareact.dafidea.com:/var/www/html'
                }
            }
            steps {
                script {
                    // Move to the project directory
                    dir('/var/www/html') {
                        // Run PHPUnit tests
                        sh 'vendor/bin/phpunit'
                    }
                }
            }
        }
    }
    post {
        always {
            // Clean up after the build
            cleanWs()
        }
    }
}
