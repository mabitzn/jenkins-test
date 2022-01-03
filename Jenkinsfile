pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }

    docker.image('trion/ng-cli-karma:1.2.1').inside {
      stage('NPM Install') {
          withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
              sh 'npm install'
          }
      }
    }

        stage('Test') {
          withEnv(["CHROME_BIN=/usr/bin/chromium-browser"]) {
            sh 'ng test --progress=false --watch false'
          }
      }
    

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
  }
}