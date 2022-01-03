pipeline {
    steps {
        stage('Checkout') {
            deleteDir()
            checkout scm
        }

        stage('NPM Install') {
            withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
                sh 'npm install'
            }
        }
    
        stage('Test') {
            echo "Linting..."
            sh "ng lint"
            echo "Testing..."
        }

        stage('Build') {
            sh 'ng build --prod --aot --sm --progress=false'
        }

        stage('Deploy') {
            echo "Deploying..."
        }
    }
    
}