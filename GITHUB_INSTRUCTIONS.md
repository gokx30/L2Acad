# How to Host L² Academy on GitHub

I have prepared the local repository for you. Since I cannot access your personal GitHub account directly without the CLI tool, please follow these simple steps to put your website online.

### Step 1: Create a Repository on GitHub
1.  Log in to [GitHub.com](https://github.com).
2.  Click the **+** icon in the top right and select **New repository**.
3.  Repository Name: `L2Academy` (or any name you like).
4.  Visibility: **Public**.
5.  **Do not** check "Initialize with README" (we already have files).
6.  Click **Create repository**.

### Step 2: Push Your Code
You will see a screen with setup commands. Look for the section **"…or push an existing repository from the command line"**.

1.  Open your terminal/command prompt in the `L2Academy` folder (I have already initialized git for you).
2.  Run the commands shown on GitHub. They will look like this:

    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/L2Academy.git
    git branch -M main
    git push -u origin main
    ```
    *(Replace `YOUR_USERNAME` with your actual GitHub username).*

### Step 3: Enable GitHub Pages (Free Hosting)
1.  Once the code is pushed, go to your repository **Settings** tab.
2.  Scroll down (or click "Pages" in the left sidebar).
3.  Under **Build and deployment > Source**, select **Deploy from a branch**.
4.  Under **Branch**, select **main** (or master) and folder **/(root)**.
5.  Click **Save**.

Wait about 1-2 minutes, and GitHub will give you a link (e.g., `https://your-username.github.io/L2Academy/`). Your site is now live!
