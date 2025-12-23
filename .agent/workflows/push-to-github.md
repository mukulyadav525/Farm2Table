---
description: how to push this project to GitHub
---

Follow these steps to push your project to GitHub for the first time:

1. **Initialize Git locally**:
   Open your terminal and run:
   ```bash
   git init
   ```

2. **Add all files**:
   ```bash
   git add .
   ```

3. **Create initial commit**:
   ```bash
   git commit -m "initial commit: Farmer UI enhancements and Organic Certification"
   ```

4. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new).
   - Give it a name (e.g., `Farm2Table`).
   - Click **Create repository**.

5. **Link and Push**:
   Copy the commands from the "or push an existing repository from the command line" section on GitHub, which look like this:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Farm2Table.git
   git branch -M main
   git push -u origin main
   ```

// turbo
// You can also run the first few steps for the user if they want to automate the local setup.
