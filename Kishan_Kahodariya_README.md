# Assignment 03

- _Date Created_: 23 March 2022
- _Last Modification Date_: 27 March 2022
- _Git Group Repo URL_: https://git.cs.dal.ca/kahodariya/csci-5709-group-06-project
- _Git Group Repo Individual branch URL_: https://git.cs.dal.ca/kahodariya/csci-5709-group-06-project/-/tree/kishan

## Authors

- [Kishan Kahodariya](ks805556@dal.ca) - _(Student)_

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

- _Deployment URL_:

## Feature

- For this Assignment, I have created the Blog feature for our project.
- With this, user can browse through location-based news and articles

## File Created

- BlogItem.jsx (with BlogItem.css)
- BlogList.jsx (with BlogList.css)
- BLogPage.jsx (with BlogPage.jsx)

## Sources Used

### BlogItem.jsx

_Lines 14 - 25_

```
 <div className='usercardmargin' >
            <Card  style={{ width: '18rem'}}>
            <Card.Img variant="center" src={image} />
            <Card.Body className='usercard'>
                <Card.Title className='usercardtitle'>{title} </Card.Title>
                    <Card.Text>
                        { description.substring(0,100)+"..." }
                    </Card.Text>
                <Button variant="primary" href={url} target="_blank">Read More</Button>
            </Card.Body>
            </Card>
        </div>
```

The code above was created by adapting the code in [ListOfUser.jsx](https://git.cs.dal.ca/kahodariya/csci5709_adv_web_services/-/blob/tutorial-04/src/ListOfUser.jsx) as shown below:

```
 <Col>
    <div className='usercardmargin' >
        <Card   style={{ width: '13rem'}}>
        <Card.Img variant="center" src={eachUser.picture} />
        <Card.Body className='usercard'>
            <Card.Title className='usercardtitle'>{eachUser.firstName}&nbsp;{eachUser.lastName} </Card.Title>
                <Card.Text>
                    {eachUser.email}
                </Card.Text>
            <Button variant="primary" onClick={()=>profileClick(eachUser.id)}>View Profile</Button>
        </Card.Body>
        </Card>
    </div>
</Col>

```

- The code in [ListOfUser.jsx](https://git.cs.dal.ca/kahodariya/csci5709_adv_web_services/-/tree/tutorial-04) was implemented by myself for this course's T4.

- [ListOfUser.jsx](https://git.cs.dal.ca/kahodariya/csci5709_adv_web_services/-/tree/tutorial-04)'s Code was used because it can be used as base code for designing the blog card

- [ListOfUser.jsx](https://git.cs.dal.ca/kahodariya/csci5709_adv_web_services/-/tree/tutorial-04)'s Code was modified by dividing the overall code between BlogItem and BlogList.

## Acknowledgements

- [Kishan Kahodariya](https://git.cs.dal.ca/kahodariya/csci5709_adv_web_services/-/tree/tutorial-04)
- [bootstrap](https://getbootstrap.com/)
- [react-bootstrap](https://react-bootstrap.github.io/)
