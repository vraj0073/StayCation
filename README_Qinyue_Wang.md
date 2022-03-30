# Assignment 3

* *Date Created*: 28 Mar 2022
* *Last Modification Date*: 29 Mar 2022
* *Individual Gitlab Repository*: <https://git.cs.dal.ca/kahodariya/csci-5709-group-06-project/-/tree/qinyue>
<https://git.cs.dal.ca/kahodariya/csci-5709-group-06-project/-/tree/qinyue-backend>
* *Group Gitlab Repository*: <https://git.cs.dal.ca/kahodariya/csci-5709-group-06-project/-/tree/master>
* *Deployed Application*: <https://group-06-staycation.herokuapp.com/>

## Author

* [Qinyue Wang](qn642785@dal.ca)

## Getting Started

## Deployment

The application is deployed on Heroku and can be opened through <https://group-06-staycation.herokuapp.com/>.

The pages I created are as follows:
<https://group-06-staycation.herokuapp.com/user-reviews>
<https://group-06-staycation.herokuapp.com/write-review>
<https://group-06-staycation.herokuapp.com/edit-review>(The editing review is only used for the edit button in user reviews page)

## Built With

* [React](https://reactjs.org/) - The frontend framework
* [Heroku](https://www.heroku.com/) - The cloud application platform

## Reference Resource

### Frontend

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

### Backend
### server.js

*Lines 8 - 17*

```
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error',(error)=>{
    console.log(error);
})

database.once('connected', ()=>{
    console.log('Database connected');
})
```
The codes above were created by learning from the blog in [](link).

### reviewRoutes.js

*Lines 6 - 79*

```
router.post('/post', async (req, res) => {
    const newReview = new reviews({
        _id: new mongoose.Types.ObjectId(),
        userEmail: req.body.userEmail,
        roomId: req.body.roomId,
        roomName: req.body.roomName,
        content: req.body.content,
        rating: req.body.rating,
        date: new Date(req.body.date)
    })
    try {
        const reviewToSave = await newReview.save();
        res.status(200).json(reviewToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/getAll', async (req, res) => {
    try {
        const allReviews = await reviews.find();
        res.json(allReviews);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/get/:userEmail', async (req, res) => {
    try {
        const userReviews = await reviews.find({ userEmail: req.params.userEmail });
        res.json(userReviews);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.get('/get/:roomId', async (req, res) => {
    try {
        const roomReviews = await reviews.find({ roomId: req.params.roomId });
        res.json(review)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

const ObjectId = mongoose.Types.ObjectId;
router.patch('/update/:id', async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        const updatedReview = req.body;
        const options = { new: true };
        const result = await reviews.findOneAndUpdate({ _id: id }, updatedReview, options);
        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        const deletedReview = await reviews.findOneAndDelete({ _id: id })
        res.send(`Document with ${deletedReview.roomName} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})    
```

- The code in [https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/](link) was implemented by Nishant Kumar.
- [https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/](link)'s Code was referred to because it can guide me to build a RESTful API with mongoDB.
- [https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/](link)'s Code was modified to create server with routes for review pages and connection of the database.


## My work
* Review.js, ReviewEdit.js, RviewWrite.js, Review.css, ReviewEdit.css
* A reviews page is designed to list titles, dates and contents of user's reviews.
* Each review can be edited and deleted by the buttons in the reviews page.
* If an edit button is clicked on, the reviews page would be redirected to the editing review page.
* In the editing review page, the content of the review can be updated and saved.
* When the content of a review is not revised or the number of letters are less than and then the save button in the editing review page is clicked on, errors would be displayed below the textarea.
* When the content is revised and the letters of new content is not less than 10 letters, the editing review page would be redirected to the reviews page that would list the updated review.
* If the cancel button in the editing review page is clicked on, the current page would be redirected to the reviews page.
* If the cancel button in the editing review page is clicked on, the current page would be redirected to the reviews page.
* The writing review page is used for a user to submit a review.

## Acknowledgments

* The blog of Georgey V B and the tutorial videos of Vỉ Đặng guide me to design star ratings and use map function of array based on a search bar.
* Based on them, I implement getting data from backend server and database and storing data in the collection.

