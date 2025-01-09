# Netflix GPT

Netflix GPT is an AI-powered movie and TV show recommendation platform. Using Google Generative AI (GPT), it provides personalized movie suggestions based on user queries. The project includes user authentication, responsive design, and seamless integration with Firebase and The Movie Database API.

---

## Live Demo

Scan the QR code below to visit the live site:

![QR Code](./NetflixgptQR.png)

Or click [here](https://netflix-gpt-7bd86.web.app/) to access it.

---

## Features

- **Authentication System:** Secure Sign Up and Sign In functionality using Firebase Authentication.
- **GPT-Enhanced Search:** AI-driven movie and TV show recommendations.
- **Dynamic Movie Details:** Fetches backdrops and details from The Movie Database API.
- **Responsive Design:** Optimized for both mobile and desktop views.
- **State Management:** Utilizes Redux for managing global states.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/netflix-gpt.git
   ```

2. Navigate to the project directory:

   ```bash
   cd netflix-gpt
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
     REACT_APP_GPT_API_KEY=your-gpt-api-key
     TMDB_API_KEY=your-tmdb-api-key
     ```

5. Start the development server:

   ```bash
   npm start
   ```

---

## Folder Structure

```
NETFLIX-GPT/
├── public/
├── src/
│   ├── components/
│   │   ├── Body.js
│   │   ├── Browse.js
│   │   ├── GptMovieSuggestion.js
│   │   ├── GptSearch.js
│   │   ├── GptSearchBar.js
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├── MainContainer.js
│   │   ├── MovieCard.js
│   │   ├── MovieList.js
│   │   ├── MuteButton.js
│   │   ├── SecondaryContainer.js
│   │   ├── VideoBackground.js
│   │   ├── VideoLoader.js
│   │   ├── VideoTitle.js
│   ├── hooks/
│   │   ├── useMovieTrailer.js
│   │   ├── useNowPlayingMovies.js
│   │   ├── usePopularMovies.js
│   │   ├── useTopRatedMovies.js
│   │   ├── useTrendingToday.js
│   ├── utils/
│   │   ├── appStore.js
│   │   ├── configSlice.js
│   │   ├── constants.js
│   │   ├── firebase.js
│   │   ├── gptSlice.js
│   │   ├── languageConstants.js
│   │   ├── movieSlice.js
│   │   ├── userSlice.js
│   │   ├── validation.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── .firebaserc
├── .gitignore
├── firebase.json
├── package-lock.json
├── package.json

```

---

## Technologies Used

- **Frontend:** React, Redux, TailwindCSS
- **Backend:** Firebase Authentication
- **AI Integration:** Google Generative AI (GPT)
- **Movie Data:** The Movie Database API (TMDB)

---

## Usage

1. **Login/Signup:** Create an account or log in to access the platform.
2. **Search Movies/TV Shows:** Use the GPT-enhanced search bar to find movies and shows.
3. **View Recommendations:** Browse dynamic suggestions and movie backdrops fetched from the TMDB API.

---

## Contribution

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature/your-feature
   ```
5. Submit a pull request.

---



## Contact

For inquiries, please contact:

- **Email:** [Abhijeet Anand -Gmail](mailto:abhijeet.anand837@gmail.com)
- **LinkedIn:** [Abhijeet-Linkedin](https://www.linkedin.com/in/abhijeet-anand17/)
- **GitHub:** [Abhijeet 912](https://github.com/Abhijeet912)

---




