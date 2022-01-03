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
                sh "ng lint"
                echo "Testing..."
            }
            
        }

        stage('Build') {
            steps {
                sh 'ng build --prod --aot --sm --progress=false'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying..."
            }
            
        }
    }
    
}