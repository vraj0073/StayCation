# Tutorial 04

- _Date Created_: 10 Feb 2022
- _Last Modification Date_: 15 Feb 2022
- _Git URL_: https://git.cs.dal.ca/kahodariya/csci5709_adv_web_services/-/tree/tutorial-04
- _Git Group Repo URL_: https://git.cs.dal.ca/kahodariya/csci-5709-group-06-project
- _Git Group Repo Individual branch URL_: https://git.cs.dal.ca/kahodariya/csci-5709-group-06-project/-/tree/kishan

## Authors

- [Kishan Kahodariya](ks805556@dal.ca) - _(Student)_

## Getting Started

- npm install react --save
- npm install react-bootstrap
- npm install bootstrap
- npm install react-router-dom

### Installing

- Download and install nodejs from https://nodejs.org/en/

## Deployment

- _Deployment URL_: https://kishan-tutorial-04.herokuapp.com/

## Sources Used

### Loginpage.jsx

_Lines 52 - 65_

```
<Container id="main-container" className="d-grid h-100">
        <Form id="sign-in-form" className="text-center p-3 w-100 " onSubmit={postData}>
          <h1 className="mb-3 fs-3 fw-bold text-white">SIGN IN</h1>
          <Form.Group controlId="sign-in-email-address">
            <Form.Control value={credentials.email} onChange={updateCredentials} name='email' type="email" size="lg" placeholder="Email address" autoComplete="username" className="position-relative" />
          </Form.Group>
          <Form.Group className="mb-3 mt-2" controlId="sign-in-password">
            <Form.Control value={credentials.password} onChange={updateCredentials} name='password' type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative" />
          </Form.Group>
          <div className="d-grid">
            <Button className='fw-bold rounded' type="submit" variant="primary" size="lg" >LOGIN</Button>
          </div>
        </Form>
      </Container>
```

The code above was created by adapting the code in [App.js](https://github.com/lyraddigital/react-bootstrap-login-form/blob/master/src/App.js) as shown below:

```
<Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center p-3 w-100">
        <img className="mb-4 bootstrap-logo"
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              alt="Bootstrap 5" />
        <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
        <Form.Group controlId="sign-in-email-address">
          <Form.Control type="email" size="lg" placeholder="Email address" autoComplete="username" className="position-relative" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative" />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
          <Form.Check label="Remember me" />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" size="lg">Sign in</Button>
        </div>
        <p className="mt-5 text-muted">&copy; 2021-2022</p>
      </Form>
    </Container>
```

- The code in [App.js](https://github.com/lyraddigital/react-bootstrap-login-form/blob/master/src/App.js) was implemented by lyraddigital

- [App.js](https://github.com/lyraddigital/react-bootstrap-login-form/blob/master/src/App.js)'s Code was used because it matched all the requirements of this tutorial and served my initial purpose of creating a simple yet effective sign In page

- [App.js](https://github.com/lyraddigital/react-bootstrap-login-form/blob/master/src/App.js)'s Code was modified by removing non-necessary elements like "Remember me" and copyright" paragraph from the initial layout.

## Acknowledgements

- [lyraddigital](https://github.com/lyraddigital)
- [bootstrap](https://getbootstrap.com/)
- [react-bootstrap](https://react-bootstrap.github.io/)
- [gradients](https://www.w3schools.com/css/css3_gradients.asp)
