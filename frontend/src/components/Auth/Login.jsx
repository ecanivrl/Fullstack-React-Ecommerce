import { message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      const { password, ...rest } = data;
      localStorage.setItem('user', JSON.stringify(rest));
      if (response.ok) {
        message.success('Giriş başarılı');
        if (data.role === 'admin') {
          setTimeout(() => {
            window.location.href = "/admin"
          }, 2000);
        } else {
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
      } else {
        message.error('Giriş başarısız');
      }
    } catch (error) {
      console.error('giriş hatası', error);
    }
  };

  return (
    <div className="account-column">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            <span>
              Username or email address <span className="required">*</span>
            </span>
            <input type="text" name="email" onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            <span>
              Password <span className="required">*</span>
            </span>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <p className="remember">
          <label>
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <button className="btn btn-sm">Login</button>
        </p>
        <a href="#" className="form-link">
          Lost your password?
        </a>
      </form>
    </div>
  );
};

export default Login;
