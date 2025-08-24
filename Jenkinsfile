pipeline {
    agent any
    tools {nodejs "NodeJS"}
    
    stages {
        
        stage('Cypress parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente2_1"
                    }
                    steps {
                        git scm
                        bat 'npm install'
                        bat 'npx cypress install'
                        bat 'npx cypress run --record --key 5e9f65ad-3ad7-406e-b2f1-c7bdf0838527 --parallel'
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agente2_2"
                    }
                    steps {
                        git scm
                        bat 'npm install'
                        bat 'npx cypress install'
                        bat 'npx cypress run --record --key 5e9f65ad-3ad7-406e-b2f1-c7bdf0838527 --parallel'
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agente2_3"
                    }
                    steps {
                        git scm
                        bat 'npm install'
                        bat 'npx cypress install'
                        bat 'npx cypress run --record --key 5e9f65ad-3ad7-406e-b2f1-c7bdf0838527 --parallel'
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizado.'
        }
        success {
            echo '✅ Todos los tests pasaron.'
        }
        failure {
            echo '❌ Hubo errores en los tests.'
        }
    }
}
