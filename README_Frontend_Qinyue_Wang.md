# Assignment 3

* *Date Created*: 28 Mar 2022
* *Last Modification Date*: 28 Mar 2022
* *Individual Gitlab Repository*: <>
* *Deployed Application*: <>

## Author

* [Qinyue Wang](qn642785@dal.ca)

## Getting Started

### Prerequisites

To have a local copy of this tutorial up and running on the local machine, firstly ensure that I have installed Node.js
that is from <https://nodejs.org/>. Check the versions of node and npm.

```
node -v
npm -v
```

Open the folder of the application and execute a command.

```
npm start
```

The application would be opened on <http://localhost:3000/>.

## Deployment

First, I open the application folder with Command Prompt and execute commands as shown below:

```
npm run build
heroku login
heroku create react-heroku-a3
git remote -v
git add .
git commit -m"Assignment 3"
git push heroku master
```

The Heroku git is created with <>. Ultimately, the application is deployed on
Heroku and can be opened through <>.

## Built With

* [React](https://reactjs.org/) - The frontend framework
* [Heroku](https://www.heroku.com/) - The cloud application platform

## Reference Resource

### Review.js

*Lines 45 - 80*

```
{retrievedData.reviews.filter(item => {
                                if (query === '') {
                                    return item;
                                } else if (item.roomName.toLowerCase().includes(query.toLowerCase()) || item.content.toLowerCase().includes(query.toLowerCase())) {
                                    return item;
                                }
                            }).map(item => (<div key={item._id} className="review-content" id={item._id}>
                                <h3>Review for {item.roomName}</h3>
                                <time>{item.date.substring(0, 10)}</time>
                                <hr/>
                                <p>{item.content}</p>
                                <div className="review-buttons">
                                    <button className="review-btn" type="button" onClick={() => {
                                        navigate('/edit-review', {
                                            state: {
                                                id: item._id,
                                                date: item.date.substring(0, 10),
                                                roomName: item.roomName,
                                                content: item.content
                                            }
                                        })
                                    }}>Edit
                                    </button>
                                    <button className="review-btn" type="button" onClick={() => {
                                        deleteDiv(item._id);
                                        axios
                                            .delete("http://localhost:8080/review/delete/" + item._id)
                                            .then((response) => {
                                                alert("Review deleted!");
                                                console.log(response);
                                            });
                                    }}>Delete
                                    </button>
                                </div>
                            </div>))}     
```

The codes above were created by learning from the blog in [https://blog.logrocket.com/create-search-bar-react-from-scratch/](link).

- The code in [https://blog.logrocket.com/create-search-bar-react-from-scratch/](link) was implemented by Georgey V B.
- [https://blog.logrocket.com/create-search-bar-react-from-scratch/](link)'s Code was referred to because it can teach me to create a search bar.
- [https://blog.logrocket.com/create-search-bar-react-from-scratch/](link)'s Code was modified to create an input search box filtering out reviews based on room name and review content.
- 
### ReviewWrite.js

*Lines 48 - 63*

```
                {Array(5).fill().map((_, index) => number >= index + 1 || star >= index + 1 ? (<AiFillStar
                    name="starEvaluation"
                    onMouseOver={() => !number && setStar((index + 1))}
                    onMouseLeave={() => setStar(undefined)}
                    style={{color: "orange"}}
                    onClick={() => {
                        setNumber(index + 1);
                    }}
                />) : (<AiOutlineStar
                    onMouseOver={() => !number && setStar((index + 1))}
                    onMouseLeave={() => setStar(undefined)}
                    style={{color: "orange"}}
                    onClick={() => {
                        setNumber(index + 1);
                    }}
                />))}
```

The codes above were created by learning from the tutorial video in [https://www.youtube.com/watch?v=McF22__Jz_I](link).

- The code in [https://www.youtube.com/watch?v=McF22__Jz_I](link) was implemented by Vỉ Đặng.
- [https://www.youtube.com/watch?v=McF22__Jz_I](link)'s Code was referred to because it can teach me to design star ratings.
- [https://www.youtube.com/watch?v=McF22__Jz_I](link)'s Code was used to design five starts in the writing reviews page.

## Work in My Semi-functional Prototype

* A reviews page is designed to list titles, dates and contents of reviews through data array.
* Each review can be edited and deleted by the buttons by the reviews page.
* If an edit button is clicked on, the reviews page would be redirected to the editing review page through useNavigate.
* In the editing review page, the content of the review can be updated and saved through a save button.
* When the content of a review is not revised or the number of letters are less than and then the save button in the editing review page is clicked on, errors would be displayed below the textarea.
* When the content is revised and the letters of new content is not less than 10 letters, the editing review page would be redirected to the reviews page that would list the updated review.
* If the cancel button in the editing review page is clicked on, the current page would be redirected to the reviews page with original reviews.


## Acknowledgments

* The blog of Georgey V B and the tutorial videos of Vỉ Đặng guide me to design star ratings and use map function of array based on a search bar.
* Based on them, I implement getting data from backend server and database and storing data in the collection.

