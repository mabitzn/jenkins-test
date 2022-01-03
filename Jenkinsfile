pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }

    stage("Download chromedriver") {
        steps {
            sh "wget https://chromedriver.storage.googleapis.com/80.0.3987.106/chromedriver_linux64.zip"
            sh "unzip chromedriver_linux64.zip"
            sh "mv chromedriver /usr/bin/chromedriver"
            sh "chromedriver - version"
            sh "export CHROME_BIN=/usr/bin/chromedriver"
        }
    }

    stage('Test') {
      parallel {
        stage('Static code analysis') {
            steps { sh 'npm run-script lint' }
        }
        stage('Unit tests') {
            steps { sh 'npm run-script test' }
        }
      }
    }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
  }
}