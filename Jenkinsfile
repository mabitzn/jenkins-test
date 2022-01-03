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
            sh "sudo mv chromedriver /usr/bin/chromedriver"
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