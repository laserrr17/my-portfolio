#!/bin/bash

# Automated deployment script with Git integration
# Usage: ./auto-deploy.sh [branch] [mode]

set -e

BRANCH=${1:-main}
MODE=${2:-simple}
PROJECT_DIR="/home/laser17/my-portfolio"
APP_NAME="my-portfolio"
PORT=10001

echo "🔄 Auto-deploying $APP_NAME..."
echo "🌿 Branch: $BRANCH"
echo "📍 Mode: $MODE"

# Color definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

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

# Check Git repository
check_git() {
    if [ ! -d ".git" ]; then
        log_error "Current directory is not a Git repository"
        exit 1
    fi
}

# Update code from repository
update_code() {
    log_info "Updating code..."
    
    # Save current changes if any
    if ! git diff --quiet; then
        log_warning "Detected uncommitted changes, stashing..."
        git stash push -m "Auto-deploy stash $(date)"
    fi
    
    # Switch to specified branch
    log_info "Switching to branch: $BRANCH"
    git checkout $BRANCH
    
    # Pull latest code
    log_info "Pulling latest code..."
    git pull origin $BRANCH
    
    log_success "Code update completed"
}

# Backup current deployment
backup_current() {
    log_info "Backing up current deployment..."
    
    BACKUP_DIR="backups/$(date +%Y%m%d_%H%M%S)"
    mkdir -p $BACKUP_DIR
    
    # Backup build artifacts
    if [ -d ".next" ]; then
        cp -r .next $BACKUP_DIR/
    fi
    
    # Backup configuration files
    cp package.json $BACKUP_DIR/ 2>/dev/null || true
    cp next.config.ts $BACKUP_DIR/ 2>/dev/null || true
    
    log_success "Backup completed: $BACKUP_DIR"
}

# Health check
health_check() {
    local url=$1
    local max_attempts=30
    local attempt=1
    
    log_info "Performing health check..."
    
    while [ $attempt -le $max_attempts ]; do
        if curl -f $url > /dev/null 2>&1; then
            log_success "Health check passed"
            return 0
        fi
        
        log_info "Waiting for application to start... ($attempt/$max_attempts)"
        sleep 2
        ((attempt++))
    done
    
    log_error "Health check failed"
    return 1
}

# Rollback deployment
rollback() {
    log_warning "Starting rollback..."
    
    # Find latest backup
    LATEST_BACKUP=$(ls -1t backups/ | head -1)
    
    if [ -z "$LATEST_BACKUP" ]; then
        log_error "No backup found"
        return 1
    fi
    
    log_info "Rolling back to backup: $LATEST_BACKUP"
    
    # Stop current service
    ./deploy.sh stop 2>/dev/null || true
    
    # Restore backup
    if [ -d "backups/$LATEST_BACKUP/.next" ]; then
        rm -rf .next
        cp -r backups/$LATEST_BACKUP/.next ./
    fi
    
    # Restart service
    ./deploy.sh $MODE
    
    log_success "Rollback completed"
}

# Send notification (optional)
send_notification() {
    local status=$1
    local message=$2
    
    # You can integrate various notification services here
    # Examples: Slack, Discord, Email, etc.
    
    log_info "Notification: [$status] $message"
    
    # Example: Write to log file
    echo "$(date): [$status] $message" >> deploy.log
}

# Main function
main() {
    cd $PROJECT_DIR
    
    # Check Git repository
    check_git
    
    # Record deployment start
    send_notification "START" "Starting auto-deployment - Branch: $BRANCH, Mode: $MODE"
    
    # Backup current deployment
    backup_current
    
    # Update code
    update_code
    
    # Execute deployment
    log_info "Executing deployment..."
    if ./deploy.sh $MODE; then
        # Health check
        if health_check "http://localhost:$PORT"; then
            send_notification "SUCCESS" "Deployment completed successfully"
            log_success "🎉 Auto-deployment completed successfully!"
        else
            send_notification "FAILED" "Health check failed, starting rollback"
            rollback
        fi
    else
        send_notification "FAILED" "Deployment failed, starting rollback"
        rollback
    fi
}

# Error handling
trap 'log_error "Error occurred during deployment"; send_notification "ERROR" "Error occurred during deployment"; exit 1' ERR

# Execute main function
main
