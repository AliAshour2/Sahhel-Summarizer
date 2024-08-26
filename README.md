
![Alt text]([src\assets\readmeImg.png](https://github.com/AliAshour2/Sahhel-Summarizer/blob/main/src/assets/readmeImg.png))


# Sahhel

Sahhel is a web application that simplifies the process of summarizing long articles into concise summaries. Whether you're a student, professional, or avid reader, Sahhel helps you save time by providing quick, clear, and concise summaries of lengthy texts.
## Deployment https://sahhel-summarizer.vercel.app/
## Features

- **Quick Summarization**: Instantly generate summaries by pasting an article link.
- **History Management**: Easily access previously summarized articles through the built-in history feature.
- **Clipboard Functionality**: Copy article links to your clipboard with a single click.
- **User-Friendly Interface**: Enjoy a clean, intuitive, and responsive design.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **State Management**: Redux Toolkit
- **API**: RapidAPI Article Extractor and Summarizer
- **Icons/Assets**: Custom icons and images

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AliAshour2/sahhel.git
   cd sahhel
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root of your project and add the following:

   ```env
   VITE_RAPID_API_ARTICLE_KEY=your_rapid_api_key_here
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Usage

1. **Summarize an Article**:
   - Paste the URL of the article you want to summarize in the input field.
   - Press `Enter` or click the submit button to generate the summary.
   - The summary will appear on the screen, and the article will be saved in your history.

2. **View Summarization History**:
   - Scroll through the history section to revisit previous articles.
   - Click on any article to view its summary again.

3. **Copy Article Links**:
   - Click the copy icon next to an article link to copy it to your clipboard.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, feel free to reach out via [GitHub](https://github.com/AliAshour2).
