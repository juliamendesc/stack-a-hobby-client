import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'https://stack-a-hobby.herokuapp.com/api',
      withCredentials: true,
    });
    this.service = service;
  }

  signup = (username, password, email, dateOfBirth, firstName, lastName, imageUrl, isTeacher) => {
    return this.service
      .post('/signup', {
        username,
        password,
        email,
        dateOfBirth,
        firstName,
        lastName,
        imageUrl,
        isTeacher: false
      })
      .then((response) => response.data)
      .catch((error) => {
        return Promise.reject(error.response.data.message);
      });
  };

  loggedin = () => {
    return this.service.get('/loggedin').then((response) => {
      return response.data;
    });
  };

  logout = () => {
    return this.service.post('/logout').then((response) => {
      return response.data;

    });
  };

  login = (username, password) => {
    return this.service
      .post('/login', { username, password })
      .then((response) => response.data)
      .catch((error) => {
        return Promise.reject(error.response.data.message);
      });
  };
}

export default AuthService;
