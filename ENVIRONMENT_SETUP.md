# Environment Variables Setup Guide

## 🔐 Securing Your API Keys

Your API keys have been removed from the git repository and replaced with environment variables. Follow these steps to set up your environment securely.

## 📁 Frontend Setup (Google Maps API)

### 1. Create Environment File
Create a `.env` file in the `frontend/` directory:

```bash
cd frontend
touch .env
```

### 2. Add Your Google Maps API Key
Add the following content to `frontend/.env`:

```env
REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
```

**⚠️ IMPORTANT:** Replace `YOUR_API_KEY` with your actual Google Maps API key.

### 3. Restart Your Development Server
After creating the `.env` file, restart your React development server:

```bash
npm start
```

## 🖥️ Backend Setup (Hostaway API)

### 1. Create Environment File
Create a `.env` file in the `backend/` directory:

```bash
cd backend
touch .env
```

### 2. Add the following content to `backend/.env`:

```env
PORT=5000
NODE_ENV=development
GOOGLE_MAPS_API_KEY=YOUR_API_KEY
```

**⚠️ IMPORTANT:** Replace the values with your actual Hostaway credentials.

### 3. Restart Your Backend Server
After creating the `.env` file, restart your backend server:

```bash
npm run dev
```

## 🚫 Security Notes

### What's Protected
- ✅ `.env` files are in `.gitignore`
- ✅ API keys removed from source code
- ✅ README files updated with placeholders
- ✅ Environment variables properly configured

### What You Need to Do
1. **Never commit `.env` files** - they're already in `.gitignore`
2. **Keep your API keys private** - don't share them in code reviews
3. **Use different keys for development/production** if needed
4. **Rotate keys regularly** for security

## 🔍 Verification

### Frontend
- Check that Google Maps loads properly
- No console errors about missing API key
- Maps component renders correctly

### Backend
- Server starts without errors
- Environment variables are loaded (check console logs)
- API endpoints respond correctly

## 🆘 Troubleshooting

### Common Issues

1. **"API key not valid" error**
   - Check your `.env` file exists
   - Verify the API key is correct
   - Restart your development server

2. **Environment variables not loading**
   - Ensure `.env` file is in the correct directory
   - Check file permissions
   - Restart your server

3. **Git still tracking sensitive files**
   - Run `git status` to check
   - If `.env` files are tracked, remove them:
     ```bash
     git rm --cached frontend/.env
     git rm --cached backend/.env
     git commit -m "Remove .env files from tracking"
     ```

## 📚 Additional Resources

- [Create React App Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [Node.js dotenv](https://www.npmjs.com/package/dotenv)
- [Google Maps API Documentation](https://developers.google.com/maps/documentation/javascript/overview)

## 🔄 Updating API Keys

When you need to update your API keys:

1. Edit the appropriate `.env` file
2. Restart your development server
3. Test the functionality
4. **Never commit the updated `.env` file**

---

**Remember:** Your `.env` files contain sensitive information and should never be shared or committed to version control.