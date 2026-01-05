# How to Host L² Academy on GitHub

I have fully prepared the local files and initialized the Git repository for you. Since I cannot access your personal GitHub account directly without your credentials, please follow these 3 simple steps to put your website online for free.

### Step 1: Create a Repository on GitHub
1.  Log in to [GitHub.com](https://github.com).
2.  Click the **+** icon in the top right and select **New repository**.
3.  **Repository Name**: Enter `L2Academy` (or any name you like).
4.  **Visibility**: Select **Public**.
5.  **Important**: **Do NOT** check "Add a README", "Add .gitignore", or "Choose a license". The repository must be empty.
6.  Click **Create repository**.

### Step 2: Push Your Code
After creating the repo, you will see a page with setup commands. Look for the section titled **"…or push an existing repository from the command line"**.

1.  Open your command prompt/terminal in the project folder (or just use the terminal window where I am working).
2.  Copy and run the 3 commands shown on GitHub. They will look exactly like this (replace `YOUR_USERNAME` with your actual username):

    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/L2Academy.git
    git branch -M main
    git push -u origin main
    ```

### Step 3: Enable Website Hosting (GitHub Pages)
1.  Once you have pushed the code, go to the **Settings** tab of your new repository on GitHub.
2.  In the left sidebar, click on **Pages** (under the "Code and automation" section).
3.  Under **Build and deployment > Branch**:
    *   Select **main** (or master) from the dropdown.
    *   Ensure the folder is set to **/(root)**.
    *   Click **Save**.

**That's it!**
Wait about 1-2 minutes. GitHub will display a link at the top of the page (e.g., `https://your-username.github.io/L2Academy/`). Click it to see your live website!
