// PM2 configuration file for Next.js portfolio
// Usage: pm2 start ecosystem.config.js

module.exports = {
  apps: [
    {
      name: 'my-portfolio',
      script: 'npm',
      args: 'start',
      cwd: '/home/laser17/my-portfolio',
      instances: 1,
      exec_mode: 'fork',
      
      // Environment variables
      env: {
        NODE_ENV: 'production',
        PORT: 10001,
      },
      
      // Log configuration
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      
      // Auto-restart configuration
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.next'],
      max_memory_restart: '500M',
      
      // Restart strategy
      restart_delay: 4000,
      max_restarts: 10,
      min_uptime: '10s',
      
      // Other configurations
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 3000,
    }
  ],
  
  deploy: {
    production: {
      user: 'laser17',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:username/my-portfolio.git', // Replace with your repository URL
      path: '/home/laser17/my-portfolio',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
