pipeline {
    agent any
    stages {
        stage('Install Backend Dependencies') {
            agent {
                docker {
                    image 'php:7.4-cli'
                    args '-u root -v /www/wwwroot/test-larareact.dafidea.com:/var/www/html'
                }
            }
            steps {
                script {
                    dir('/var/www/html') {
                        // Update and install sudo if necessary
                        sh '''
                            apt-get update && apt-get install -y sudo
                            sudo chown -R $(whoami):$(whoami) /var/www/html
                        '''
                        // Install Composer
                        sh 'curl -sS https://getcomposer.org/installer | php'
                        sh 'php composer.phar install'
                    }
                }
            }
        }
        stage('Install Frontend Dependencies') {
            agent {
                docker {
                    image 'node:14'
                    args '-u root -v /www/wwwroot/test-larareact.dafidea.com:/var/www/html'
                }
            }
            steps {
                script {
                    dir('/var/www/html') {
                        // Install frontend dependencies
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Build Frontend') {
            agent {
                docker {
                    image 'node:14'
                    args '-u root -v /www/wwwroot/test-larareact.dafidea.com:/var/www/html'
                }
            }
            steps {
                script {
                    dir('/var/www/html') {
                        // Build frontend
                        sh 'npm run build'
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
                    dir('/var/www/html') {
                        // Run tests
                        sh 'vendor/bin/phpunit'
                    }
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
