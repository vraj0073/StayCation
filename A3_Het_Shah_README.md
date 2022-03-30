# Assignment 03

- _Date Created_: 23 March 2022
- _Last Modification Date_: 29 March 20221
- _Git Group Frontend Repo URL_: https://git.cs.dal.ca/kahodariya/csci-5709-group-06-project
- _Git Group Repo Individual branch URL_: https://git.cs.dal.ca/kahodariya/csci-5709-group-06-project/-/tree/hetnew
- _Git Backend Repo URL_: https://git.cs.dal.ca/kahodariya/csci-5709-group-06-project/-/tree/het-backend

## Authors

- [Het Shah](ht699147@dal.ca) - _(Student)_

## Getting Started

- npm install react --save
- npm install react-bootstrap
- npm install react-router-dom
- npm install bootstrap
- npm install express
- npm install react-router-dom

### Installing

- Download and install nodejs from https://nodejs.org/en/

## Deployment

- _Deployment URL_: https://group-06-staycation.herokuapp.com/
- _Backend Deployment URL_: https://csci5709hsa3backend.herokuapp.com/

## Feature

- For this Assignment, I have created the Travel History feature for our project.
- With this, user can see the travel history of a particular user. This page can be accessed using /th route on the site.

## File Created

- TravelHistory.js
- bookings.js
- booking.model.js
- index.js
- .env

## Sources Used

### TravelHistory.js

_Lines 26 - 36_

```
 useEffect(() => {
    const API_URL = `https://csci5709hsa3backend.herokuapp.com/bookings/getbookingbyemail/${email}`;
    axios({
      method: "get",
      url: API_URL,
    }).then(function (response) {
      if (response.status === 200) {
        setState(response.data);
      }
    });
  }, []);

```

The code above was created by adapting the code in [Profile.js](https://git.cs.dal.ca/hkshah/het-shah-csci5709/-/blob/tutorial4/src/Components/Profile.js) as shown below:

```
  useEffect(() => {
    const API_URL = "https://tutorial4-api.herokuapp.com/api/users";
    axios({
      method: "get",
      url: API_URL,
    }).then(function (response) {
      if (response.status === 200) {
        setState(response.data.data);
        setFilteredState(response.data.data);
      }
    });
  }, []);


```

- The code in [Profile.js](The code above was created by adapting the code in [Profile.js](https://git.cs.dal.ca/hkshah/het-shah-csci5709/-/blob/tutorial4/src/Components/Profile.js) as shown below:
  ) was implemented by myself for this course's T4.

- [TravelHistory.js](- The code in [Profile.js](The code above was created by adapting the code in [Profile.js](https://git.cs.dal.ca/hkshah/het-shah-csci5709/-/blob/tutorial4/src/Components/Profile.js) as shown below:
  )'s Code was used because it can be used as base code for designing the cards.

## Acknowledgements

- [Het Shah](https://git.cs.dal.ca/hkshah/het-shah-csci5709/-/tree/tutorial4)
- [bootstrap](https://getbootstrap.com/)
- [react-bootstrap](https://react-bootstrap.github.io/)
