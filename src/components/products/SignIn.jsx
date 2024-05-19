import React from 'react';

const SignIn = () => {
    return (
        <div>
             <div class="form-container">
                <div className="block-inputs">
                <h2>Sign In</h2>
    <form action="">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
      </div>
      <div class="form-group">
        <button type="submit">Sign In</button>
      </div>
    </form>
                </div>
  </div>
        </div>
    );
};

export default SignIn;