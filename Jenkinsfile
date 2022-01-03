pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                deleteDir()
                checkout scm
            }
        }

        stage('NPM Install') {
            steps {
                sh 'npm install'
            }
        }
    
        stage('Test') {
            steps {
                echo "Linting..."
                sh "npm run ng lint"
                echo "Testing..."
            }
            
        }

        stage('Build') {
            steps {
                sh 'npm run ng build --prod --aot --sm --progress=false'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying..."
            }
            
        }
    }
    
}