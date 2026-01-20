# Contributing to DICPC Official Website

Thank you for your interest in contributing to the DICPC official platform! We welcome contributions from all club members and the broader Daffodil International College community.

## 📜 Code of Conduct

As a contributor, you agree to maintain a professional, respectful, and inclusive environment. Focus on constructive feedback and helping others grow.

## 🚀 Getting Started

1.  **Fork the Repository**: Create your own copy of the project.
2.  **Setup Local Data**:
    ```bash
    cp src/lib/data/local-data.example.ts src/lib/data/local-data.ts
    ```
    *Note: Never commit `local-data.ts` as it contains personal information.*
3.  **Install Dependencies**: `npm install`
4.  **Create a Branch**: `git checkout -b feature/your-awesome-feature`

## 🛠️ Development Workflow

### Coding Standards

- **TypeScript**: Use strict typing. Avoid `any`.
- **Styling**: Use Tailwind CSS 4 utility classes. Keep components responsive.
- **Components**: Follow the Atomic design structure in `src/components`.
- **Linting**: Ensure `npm run lint` passes before submitting.

### Commit Guidelines

We follow conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `chore:` for maintenance tasks
- `style:` for UI/CSS changes

## 📬 Pull Request Process

1.  Ensure your code is clean and tested.
2.  Update the `README.md` if your changes introduce new setup requirements.
3.  Submit a Pull Request (PR) with a clear description of your changes.
4.  Wait for a lead developer to review and approve.

## 🐛 Reporting Issues

Use the GitHub Issue Tracker to report bugs or suggest enhancements. Please include:
- A clear title and description.
- Steps to reproduce (for bugs).
- Screenshots or recordings if applicable.

---
*Building the future of competitive programming together.*
