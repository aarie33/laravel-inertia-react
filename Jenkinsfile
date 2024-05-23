pipeline {
    agent any

    environment {
        NODE_IMAGE = 'node:16-buster-slim'
        PHP_IMAGE = 'php:7.4-cli'
        WORKDIR = '/www/wwwroot/test-larareact.dafidea.com'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Backend Setup') {
            agent {
                docker {
                    image "${PHP_IMAGE}"
                    args "-v $PWD:${WORKDIR}"
                }
            }
            steps {
                script {
                    // Install PHP dependencies
                    sh '''
                    apt-get update && apt-get install -y unzip
                    cd ${WORKDIR}
                    curl -sS https://getcomposer.org/installer | php
                    php composer.phar install
                    '''
                    // Set up the Laravel environment
                    sh '''
                    cd ${WORKDIR}
                    cp .env.example .env
                    php artisan key:generate
                    php artisan migrate --seed
                    '''
                }
            }
        }

        stage('Frontend Setup') {
            agent {
                docker {
                    image "${NODE_IMAGE}"
                    args "-v $PWD:${WORKDIR}"
                }
            }
            steps {
                script {
                    // Install Node.js dependencies and build assets
                    sh '''
                    cd ${WORKDIR}
                    npm install
                    npm run production
                    '''
                }
            }
        }

        stage('Testing') {
            parallel {
                stage('Backend Tests') {
                    agent {
                        docker {
                            image "${PHP_IMAGE}"
                            args "-v $PWD:${WORKDIR}"
                        }
                    }
                    steps {
                        sh '''
                        cd ${WORKDIR}
                        php artisan test
                        '''
                    }
                }
                stage('Frontend Tests') {
                    agent {
                        docker {
                            image "${NODE_IMAGE}"
                            args "-v $PWD:${WORKDIR}"
                        }
                    }
                    steps {
                        sh '''
                        cd ${WORKDIR}
                        npm test
                        '''
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
