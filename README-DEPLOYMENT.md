# Deployment Guide

This project provides multiple deployment options for your Next.js portfolio. Choose the method that best fits your needs.

## 🚀 Quick Start

### 1. Simple Deployment (Recommended for beginners)

```bash
# Give execution permissions to scripts
chmod +x build-and-run.sh deploy.sh auto-deploy.sh

# Build and run (default port 10001)
./build-and-run.sh

# Or use the deployment script
./deploy.sh simple
```

### 2. Docker Deployment

```bash
# Using Docker only
./deploy.sh docker

# Using Docker Compose (includes Nginx)
./deploy.sh docker-compose
```

### 3. Automated Deployment

```bash
# Auto-pull code and deploy
./auto-deploy.sh main simple

# Specify branch and deployment mode
./auto-deploy.sh develop docker
```

## 📋 Deployment Options

### Simple Deployment
- ✅ Easiest deployment method
- ✅ Direct Node.js execution
- ✅ Perfect for development and testing
- ❌ No process management
- ❌ Manual restart required

### Docker Deployment
- ✅ Containerized deployment, consistent environment
- ✅ Automatic restart
- ✅ Resource isolation
- ✅ Easy scaling
- ❌ Requires Docker environment

### Docker Compose Deployment
- ✅ Includes Nginx reverse proxy
- ✅ Complete production setup
- ✅ SSL support (requires certificate configuration)
- ✅ Load balancing ready
- ❌ More complex configuration

## 🔧 Advanced Configuration

### PM2 Process Management

```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start ecosystem.config.js

# Check status
pm2 status

# View logs
pm2 logs my-portfolio

# Restart application
pm2 restart my-portfolio
```

### System Service (Systemd)

```bash
# Copy service file
sudo cp my-portfolio.service /etc/systemd/system/

# Reload systemd
sudo systemctl daemon-reload

# Enable auto-start on boot
sudo systemctl enable my-portfolio

# Start service
sudo systemctl start my-portfolio

# Check status
sudo systemctl status my-portfolio
```

### Nginx Configuration

1. Edit `nginx.conf` file, replace domain names:
   ```nginx
   server_name your-domain.com www.your-domain.com;
   ```

2. Copy configuration file:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/my-portfolio
   sudo ln -s /etc/nginx/sites-available/my-portfolio /etc/nginx/sites-enabled/
   ```

3. Test and reload Nginx:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

## 🔐 SSL Certificate Setup

### Using Let's Encrypt (Recommended)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Manual SSL Configuration

1. Place certificate files in secure directory:
   ```bash
   sudo mkdir -p /etc/nginx/ssl
   sudo cp your-certificate.crt /etc/nginx/ssl/
   sudo cp your-private.key /etc/nginx/ssl/
   sudo chmod 600 /etc/nginx/ssl/*
   ```

2. Uncomment SSL configuration in `nginx.conf` and update paths.

## 📊 Monitoring and Logs

### Application Logs

```bash
# Simple deployment logs
tail -f app.log

# PM2 logs
pm2 logs my-portfolio

# Docker logs
docker logs my-portfolio

# Docker Compose logs
docker-compose logs -f
```

### System Monitoring

```bash
# View processes
ps aux | grep node

# Check port usage
netstat -tulpn | grep :10001

# System resources
htop
```

## 🔄 Updates and Maintenance

### Manual Update

```bash
# Stop application
./deploy.sh stop  # or appropriate stop command

# Pull latest code
git pull origin main

# Redeploy
./deploy.sh [mode]
```

### Automated Update

```bash
# One-click update and deploy
./auto-deploy.sh main simple
```

### Rollback

```bash
# View backups
ls -la backups/

# Manual rollback to specific backup
# (auto-deploy.sh includes automatic rollback functionality)
```

## 🛠️ Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Find process using port
   lsof -i :10001
   
   # Kill process
   kill -9 <PID>
   ```

2. **Permission issues**
   ```bash
   # Give execution permissions to scripts
   chmod +x *.sh
   
   # Check file ownership
   ls -la
   ```

3. **Build failures**
   ```bash
   # Clear cache
   rm -rf .next node_modules
   npm install
   npm run build
   ```

4. **Docker issues**
   ```bash
   # Clean Docker cache
   docker system prune -f
   
   # Rebuild image
   docker build --no-cache -t my-portfolio .
   ```

### Performance Optimization

1. **Enable Gzip compression** (already configured in Nginx)
2. **Configure static file caching** (already configured in Nginx)
3. **Use CDN** (configure as needed)
4. **Database connection pooling** (if using database)

## 📝 Environment Variables

Create `.env.production` file:

```env
NODE_ENV=production
PORT=10001
# Add other environment variables as needed
```

## 🌐 Access URLs

After deployment, your application will be available at:

- **Direct access**: http://localhost:10001
- **Through Nginx**: http://localhost:80 (or your domain)
- **Health check**: http://localhost:10001/health

## 🔗 Related Links

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Docker Official Documentation](https://docs.docker.com/)
- [Nginx Configuration Guide](https://nginx.org/en/docs/)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)

## 📞 Support

If you encounter issues, please check:
1. Log files
2. Network connectivity
3. Port availability
4. File permissions
5. Environment variable configuration

## 🎯 Next Steps

After successful deployment:
1. Configure your domain name in Nginx
2. Set up SSL certificates
3. Configure monitoring and alerting
4. Set up automated backups
5. Configure CI/CD pipeline (optional)
