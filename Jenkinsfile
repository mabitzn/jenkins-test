pipeline {
    environment {
        CHROME_BIN = '/usr/bin/chromedriver'
    }

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
        echo "Testing..."
    }

    stage('Build') {
        milestone()
        sh 'ng build --prod --aot --sm --progress=false'
    }

    stage('Deploy') {
        milestone()
        echo "Deploying..."
    }
}