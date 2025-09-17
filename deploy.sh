#!/bin/bash

# Automated deployment script for Next.js portfolio
# Usage: ./deploy.sh [mode]
# modes: simple (default), docker, docker-compose

set -e

MODE=${1:-simple}
PROJECT_DIR="/home/laser17/my-portfolio"
APP_NAME="my-portfolio"
PORT=10001

echo "🚀 Starting deployment of $APP_NAME..."
echo "📍 Deployment mode: $MODE"

# Color definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if command exists
check_command() {
    if ! command -v $1 &> /dev/null; then
        log_error "$1 is not installed, please install $1 first"
        exit 1
    fi
}

# Stop existing processes
stop_existing() {
    log_info "Stopping existing processes..."
    
    if [ "$MODE" = "docker" ] || [ "$MODE" = "docker-compose" ]; then
        if command -v docker &> /dev/null; then
            docker stop $APP_NAME 2>/dev/null || true
            docker rm $APP_NAME 2>/dev/null || true
        fi
        
        if [ "$MODE" = "docker-compose" ] && command -v docker-compose &> /dev/null; then
            docker-compose down 2>/dev/null || true
        fi
    else
        # Stop Node.js processes
        pkill -f "next start" || true
        pkill -f "node.*server.js" || true
        # Stop processes on port 10001
        lsof -ti:$PORT | xargs kill -9 2>/dev/null || true
    fi
}

# Simple deployment mode
deploy_simple() {
    log_info "Using simple deployment mode..."
    
    check_command "node"
    check_command "npm"
    
    cd $PROJECT_DIR
    
    # Install dependencies
    log_info "Installing dependencies..."
    npm install
    
    # Build project
    log_info "Building project..."
    npm run build
    
    # Start project in background
    log_info "Starting application on port $PORT..."
    export PORT=$PORT
    nohup npm run start > app.log 2>&1 &
    
    # Wait for application to start
    sleep 5
    
    # Health check
    if curl -f http://localhost:$PORT > /dev/null 2>&1; then
        log_success "Application started successfully!"
        log_info "Access URL: http://localhost:$PORT"
        log_info "Log file: $PROJECT_DIR/app.log"
    else
        log_error "Application failed to start, check logs: $PROJECT_DIR/app.log"
        exit 1
    fi
}

# Docker deployment mode
deploy_docker() {
    log_info "Using Docker deployment mode..."
    
    check_command "docker"
    
    cd $PROJECT_DIR
    
    # Build Docker image
    log_info "Building Docker image..."
    docker build -t $APP_NAME .
    
    # Run container
    log_info "Starting Docker container..."
    docker run -d \
        --name $APP_NAME \
        -p $PORT:$PORT \
        --restart unless-stopped \
        $APP_NAME
    
    # Wait for container to start
    sleep 10
    
    # Check container status
    if docker ps | grep $APP_NAME > /dev/null; then
        log_success "Docker container started successfully!"
        log_info "Access URL: http://localhost:$PORT"
        log_info "View logs: docker logs $APP_NAME"
    else
        log_error "Docker container failed to start"
        docker logs $APP_NAME
        exit 1
    fi
}

# Docker Compose deployment mode
deploy_docker_compose() {
    log_info "Using Docker Compose deployment mode..."
    
    check_command "docker"
    check_command "docker-compose"
    
    cd $PROJECT_DIR
    
    # Start services
    log_info "Starting Docker Compose services..."
    docker-compose up -d --build
    
    # Wait for services to start
    sleep 15
    
    # Check service status
    if docker-compose ps | grep "Up" > /dev/null; then
        log_success "Docker Compose services started successfully!"
        log_info "Access URLs:"
        log_info "  - Application: http://localhost:$PORT"
        log_info "  - Nginx: http://localhost:80"
        log_info "View logs: docker-compose logs -f"
    else
        log_error "Docker Compose services failed to start"
        docker-compose logs
        exit 1
    fi
}

# Main deployment logic
main() {
    log_info "Starting deployment process..."
    
    # Stop existing services
    stop_existing
    
    # Deploy based on mode
    case $MODE in
        "simple")
            deploy_simple
            ;;
        "docker")
            deploy_docker
            ;;
        "docker-compose")
            deploy_docker_compose
            ;;
        *)
            log_error "Unknown deployment mode: $MODE"
            log_info "Supported modes: simple, docker, docker-compose"
            exit 1
            ;;
    esac
    
    log_success "Deployment completed!"
}

# Signal handling
trap 'log_warning "Deployment interrupted"; exit 1' INT TERM

# Execute main function
main
