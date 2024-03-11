# CodeQL

This GitHub Actions workflow is designed to analyze code using CodeQL. It scans for changed files supported by CodeQL and only analyzes projects that have changed on pull requests. During a push to the main branch, it scans everything.

## Find Paths with Changes

This job identifies paths with changes in your repository. It runs on the `main` branch and ignores changes to the `README.md` file.

### Steps:

1. **Checkout repository:** Checks out the repository with a fetch depth of 0.
2. **Get all paths:** Gets all paths in the repository, excluding changes from pull requests.
3. **Get changed paths:** Gets the paths changed in pull requests.
4. **Set matrix values:** Sets the matrix values for subsequent jobs based on all paths and changed paths.

## Scan

This job analyzes the code using CodeQL. It runs on the `main` branch and is dependent on the `find-paths-with-changes` job.

### Steps:

1. **Checkout repository:** Checks out the repository.
2. **Generate CodeQL config file:** Copies the CodeQL configuration template and updates it with the target directory.
3. **Initialize CodeQL:** Initializes CodeQL with the provided configuration and languages.
4. **Attempting Autobuild:** Attempts to autobuild for C++ and C# projects.
5. **Install Java:** Installs Java for Java and Kotlin projects.
6. **Build project (Java/Kotlin only):** Builds the project using Maven.
7. **Analyze with CodeQL:** Analyzes the code with CodeQL based on the provided matrix.

**Note:** Ensure you have the necessary configurations and permissions set up for CodeQL analysis.

## Running CodeQL from Visual Studio Code

To run CodeQL from your local environment using Visual Studio Code, follow these steps:

1. **Install Visual Studio Code**: Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/).

2. **Install CodeQL extension**: Open Visual Studio Code and install the CodeQL extension. You can find it in the Extensions view (Ctrl+Shift+X or Cmd+Shift+X) by searching for "CodeQL".

3. **Set up CodeQL in your project**: If you haven't already set up CodeQL in your project, you can initialize it by following the instructions provided in the CodeQL extension. This typically involves setting up the CodeQL CLI and databases.

4. **Create CodeQL queries**: You can create custom CodeQL queries to analyze your code for security vulnerabilities or other issues. Visual Studio Code provides tools for writing and testing CodeQL queries directly within the editor.

5. **Run CodeQL analysis**: Once your queries are ready, you can run CodeQL analysis on your codebase from within Visual Studio Code. This will provide insights into potential security vulnerabilities or other issues.

### Visual Studio Code Screenshot
![Visual Studio Code Screenshot](https://github.com/thisisbramiller/deltadentalghasassigmnet/assets/76793954/68a81b22-a04e-4824-81b4-1912ec00d676)


For local secrets scanning, you can use Husky with pre-commit hooks. However, if you've opted for Push Protection within the repository settings, it will enforce checks before pushing changes to the main branch, ensuring that no secrets are inadvertently committed. Note that while this approach may not completely eliminate the possibility of committing secrets, it significantly reduces the risk compared to relying solely on pre-commit hooks.

## Heroku Links

- **Staging:** [https://sorriso-frontend-staging-8afef3999af7.herokuapp.com/](https://sorriso-frontend-staging-8afef3999af7.herokuapp.com/)
- **Production:** [https://sorriso-frontend-prod-839de176e831.herokuapp.com/](https://sorriso-frontend-prod-839de176e831.herokuapp.com/)

For more details on CodeQL and GitHub Actions, refer to the [CodeQL documentation](https://docs.github.com/en/code-security/secure-coding/automatically-scanning-your-code-for-security-problems/about-code-scanning).
