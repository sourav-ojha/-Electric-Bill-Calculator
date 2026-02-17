# Technical Details

## User Authentication

The user authentication system uses JWT (JSON Web Tokens) for securing user sessions. Users need to provide their email and password during login, which are verified against the database.

## Data Handling

Data is handled using SQLAlchemy as the ORM layer. All data models are defined in the `app/models.py` file. The database migrations are managed with Alembic.

## UI Components

The frontend is built using React.js. Major components include the Login component, Profile page, and Dashboard.

## Security Measures

- **HTTPS**: The application communicates over HTTPS to ensure data privacy during transmission.
- **CSRF Protection**: Flask-WTF CSRF protection is used throughout the application to protect against cross-site request forgery attacks.
- **Input Validation**: All user input is validated both client-side and server-side to prevent injection attacks.
- **Password Hashing**: User passwords are hashed using Werkzeug before being stored in the database.
```