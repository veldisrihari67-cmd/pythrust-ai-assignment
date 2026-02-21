'''typescript
// login-card.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.scss'
})
export class LoginCardComponent {
  email = '';
  password = '';

  onLogin(): void {
    console.log('Login attempt:', { email: this.email, password: this.password });
    alert('Login clicked! (Check console for credentials)');
    // In a real application, you would typically dispatch an action or call an authentication service here.
  }
}
```

```html
<!-- login-card.component.html -->
<div class="login-card">
  <h2 class="card-title">Login</h2>

  <form (ngSubmit)="onLogin()">
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        [(ngModel)]="email"
        required
        placeholder="your@example.com"
        class="form-input"
      />
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        [(ngModel)]="password"
        required
        placeholder="••••••••"
        class="form-input"
      />
    </div>

    <button type="submit" class="login-button">Login</button>
  </form>

  <p class="forgot-password">
    <a href="#" class="forgot-password-link">Forgot Password?</a>
  </p>
</div>
```

```scss
/* login-card.component.scss */
:host {
  /* Define CSS variables based on the provided styles */
  --primary-color: #6366f1;
  --border-radius: 8px;
  font-family: 'Inter', sans-serif; /* Apply font family to the host component */
  display: flex; /* Use flexbox to center the card easily */
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Take full viewport height */
  background: #f0f2f5; /* A light background for the glassmorphism to show against */
}

.login-card {
  width: 100%;
  max-width: 380px;
  padding: 30px;
  border-radius: var(--border-radius);

  /* Glassmorphism styles translated from 'backdrop-blur-md bg-white/30 border border-white/20' */
  backdrop-filter: blur(12px); /* A common translation for 'md' blur */
  background-color: rgba(255, 255, 255, 0.3); /* bg-white/30 */
  border: 1px solid rgba(255, 255, 255, 0.2); /* border border-white/20 */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06); /* Common for glassmorphism */
}

.card-title {
  text-align: center;
  color: #333; /* Dark color for title for contrast */
  margin-bottom: 25px;
  font-size: 1.8em;
  font-weight: 600;
}

.form-group {
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 0.9em;
    color: #444; /* Slightly lighter dark color for labels */
  }
}

.form-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid rgba(255, 255, 255, 0.4); /* Light border for inputs */
  background-color: rgba(255, 255, 255, 0.5); /* Slightly opaque white background for inputs */
  border-radius: var(--border-radius);
  font-size: 1em;
  color: #333; /* Dark text color for input */

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2); /* Focus ring using primary_color */
  }

  &::placeholder {
    color: rgba(51, 51, 51, 0.6); /* Translucent dark placeholder */
  }
}

.login-button {
  width: 100%;
  padding: 12px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 15px;

  &:hover {
    background-color: darken(var(--primary-color), 10%); /* SCSS darken function */
  }

  &:active {
    background-color: darken(var(--primary-color), 15%);
  }
}

.forgot-password {
  text-align: center;
  margin-top: 25px;
  font-size: 0.9em;

  .forgot-password-link {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: darken(var(--primary-color), 10%);
    }
  }
}
```
