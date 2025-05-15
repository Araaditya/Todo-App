
# Flask To-Do Web Application

A simple, secure, and modular To-Do web application built using Flask. The app supports user registration, login, and task management with full CRUD (Create, Read, Update, Delete) functionality.

## Features

- User authentication with hashed passwords
- Add, update, and delete tasks
- SQLite database with SQLAlchemy ORM
- Database migrations using Alembic
- Secure architecture with environment-based configuration
- Clean and modular Flask application structure

## Technologies Used

- Python 3.x
- Flask
- SQLite
- SQLAlchemy
- Alembic
- Flask-WTF
- Jinja2
- HTML/CSS
- Bootstrap (optional for UI styling)

## Project Structure

```
flask/
├── app.py                # Main application entry point
├── instance/
│   └── todo.db           # SQLite database (excluded from Git)
├── migrations/           # Alembic migration scripts
├── static/               # Static files (CSS, JS)
├── templates/            # HTML templates
├── .vscode/              # Editor settings (optional)
└── requirements.txt      # Python dependencies
```


1. **Create a virtual environment and activate it:**

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. **Install dependencies:**

```bash
pip install -r requirements.txt
```

3. **Run the app:**

```bash
flask run
```

## Database Migration Commands

```bash
flask db init
flask db migrate -m "Initial migration."
flask db upgrade
```

## To-Do / Improvements
- Add unit tests
- Deploy to Render/Heroku
- Add pagination and search