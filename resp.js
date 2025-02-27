burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

const booksContainer = document.getElementById('books-container');

function showBooks(genre) {
    // Clear existing books
    booksContainer.innerHTML = '';

    // Replace this with actual data retrieval based on the selected genre
    const booksData = getBooksDataForGenre(genre);

    // Display books for the selected genre
    booksData.forEach(book => {
        const bookElement = createBookElement(book);
        booksContainer.appendChild(bookElement);
    });
}

function getBooksDataForGenre(genre) {
    // Replace this with actual data retrieval based on the selected genre
    // For example, you could fetch data from a server or use a local database
    // This is just a placeholder data
    const data = {
        fiction: [
            { title: 'To Kill a Mockingbird', author: 'Harper Lee', summary: 'Summary: Set in the American South during the 1930s, this novel follows young Scout Finch and her father, Atticus, a lawyer defending a black man accused of raping a white woman. It explores themes of racial injustice, moral growth, and compassion, offering a poignant portrayal of societies complexities and the fight for justice.', image: 'img/fiction1.jpg' },
            { title: '1984', author: 'George Orwell', summary: 'Summary: Set in a dystopian world, the story revolves around Winston Smith, who rebels against the oppressive regime of the Party led by Big Brother. It is a cautionary tale that explores surveillance, propaganda, and the loss of individuality, emphasizing the importance of truth and freedom.', image: 'img/fiction2.jpg' },
            { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', summary: 'Summary: Narrated by Nick Carraway, the novel delves into the opulent world of Jay Gatsby, his love for Daisy Buchanan, and the pursuit of the American Dream. It critiques the emptiness of wealth, the complexities of love, and the disillusionment of the Jazz Age.', image: 'img/fiction3.jpg' },
            { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', summary: 'Summary: The multigenerational saga of the Buendía family in the fictional town of Macondo blends magical realism with social and political commentary. It explores themes of love, fate, and the cyclical nature of history, providing a captivating and imaginative narrative.', image: 'img/fiction4.jpg' },
            { title: 'Pride and Prejudice', author: 'Jane Austen', summary: 'Summary: Set in the Regency era, this novel follows the independent-minded Elizabeth Bennet and the proud Mr. Darcy as they navigate misunderstandings and societal expectations on the path to love. Its a timeless exploration of social class, manners, and the complexities of relationships.', image: 'img/fiction5.jpg' },
            { title: 'The Catcher in the Rye', author: 'J.D. Salinger', summary: 'Summary: Holden Caulfield, a disillusioned teenager, narrates his experiences in New York City following his expulsion from prep school. The novel is a poignant exploration of teenage angst, alienation, and the search for authenticity.', image: 'img/fiction6.jpg' },
            { title: 'Moby-Dick', author: 'Herman Melville', summary: 'Summary: Captain Ahab seeks revenge on the white whale, Moby Dick, leading his crew on a perilous voyage. The novel delves into themes of obsession, fate, and the human struggle against nature, offering rich symbolism and philosophical insights.', image: 'img/fiction7.jpg' },
            { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', summary: 'Summary: This epic fantasy trilogy follows Frodo Baggins and his companions as they embark on a quest to destroy the One Ring and defeat the dark lord Sauron. Its a classic tale of heroism, friendship, and the battle between good and evil set in Middle-earth.', image: 'img/fiction8.jpg' },
            { title: 'Anna Karenina', author: 'Leo Tolstoy', summary: 'Summary: The novel explores the tragic love affair between the married Anna Karenina and Count Vronsky against the backdrop of Russian society. It examines themes of love, morality, and the consequences of societal expectations with profound psychological depth.', image: 'img/fiction9.jpg' },
            { title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', summary: 'Summary: This novel revolves around the dysfunctional Karamazov family and the philosophical debates among the three brothers: Dmitri, Ivan, and Alyosha. It delves into moral dilemmas, faith, and the search for meaning, offering a profound exploration of human nature and spirituality.', image: 'img/fiction10.jpg' },
               // Add more books for the 'fiction' genre here
        ],

        nonfiction: [
            { title: 'The Diary of a Young Girl', author: 'Anne Frank', summary: 'Summary: Anne Franks diary captures her experiences hiding from the Nazis during World War II. It offers profound insights into the human spirit, resilience, and the horrors of the Holocaust through the eyes of a young girl.', image: 'img/non-fiction1.jpg' },
            { title: 'The Elements of Style', author: 'William Strunk Jr. and E.B. White', summary: 'Summary: This guidebook focuses on English language usage, grammar, and composition. It provides invaluable advice on concise writing, grammar rules, and effective communication, making it a timeless reference for writers.', image: 'img/non-fiction2.jpg' },
            { title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', summary: 'Summary: Harari traces the history of Homo sapiens, exploring the evolution of humans from ancient times to the present. This thought-provoking book examines societal changes, cultural developments, and the impact of humans on the world.', image: 'img/non-fiction3.jpg' },
            { title: 'Man\'s Search for Meaning', author: 'Viktor E. Frankl', summary: 'Summary: Psychiatrist Viktor Frankl reflects on his experiences as a concentration camp inmate during the Holocaust and presents his philosophy of finding meaning in life. It\'s a profound exploration of human resilience and the pursuit of purpose.', image: 'img/non-fiction4.jpg' },
            { title: 'The Selfish Gene', author: 'Richard Dawkins', summary: 'Summary: Dawkins introduces the concept of gene-centered evolution, explaining how genes drive human behavior and survival. It\'s a seminal work that explores the role of genes in shaping life and behaviors.', image: 'img/non-fiction5.jpg' },
            { title: 'Guns, Germs, and Steel: The Fates of Human Societies', author: 'Jared Diamond', summary: 'Summary: Diamond investigates why some civilizations thrived while others did not. Exploring factors like geography, agriculture, and technology, he offers a compelling analysis of human history and societal development.', image: 'img/non-fiction6.jpg' },
            { title: 'Silent Spring', author: 'Rachel Carson', summary: 'Summary: Carson\'s groundbreaking book examines the environmental impact of pesticides, particularly DDT, on ecosystems. It played a pivotal role in sparking the modern environmental movement, advocating for conservation and awareness.', image: 'img/non-fiction7.jpg' },
            { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', summary: 'Summary: Kahneman, a Nobel laureate, explores the dual systems of thinking: fast, intuitive thinking, and slow, deliberate reasoning. The book provides insights into human decision-making, biases, and irrational behavior.', image: 'img/non-fiction8.jpg' },
            { title: 'The Art of War', author: 'Sun Tzu', summary: 'Summary: A classic Chinese text on military strategy, it delves into tactics, leadership, and the philosophy of warfare. Its principles have been applied not only in warfare but also in business, politics, and everyday life.', image: 'img/non-fiction9.jpg' },
            { title: 'The Power of Habit: Why We Do What We Do in Life and Business', author: 'Charles Duhigg', summary: 'Summary: Duhigg explores the science behind habits, explaining how they\'re formed and how they can be changed. This insightful book offers practical advice on harnessing the power of habits to achieve personal and professional success.', image: 'img/non-fiction10.jpg' },

        ],

        selfhelp: [
            { title: 'How to Win Friends and Influence People', author: 'Dale Carnegie', summary: 'Summary: Carnegie\'s book offers practical advice on communication, leadership, and building meaningful relationships, emphasizing empathy and understanding to achieve personal and professional success.', image: 'img/self-help1.jpg' },
            { title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', summary: 'Summary: Covey presents a holistic approach to personal development through seven principles, focusing on proactive behavior, goal setting, and fostering effectiveness in both personal and professional life.', image: 'img/self-help2.jpg' },
            { title: 'Think and Grow Rich', author: 'Napoleon Hill', summary: 'Summary: Hill\'s book explores the psychology of success, emphasizing the power of positive thinking, goal-setting, and resilience to achieve wealth and personal fulfillment.', image: 'img/self-help3.jpg' },
            { title: 'The Power of Now: A Guide to Spiritual Enlightenment', author: 'Eckhart Tolle', summary: 'Summary: Tolle\'s book encourages living in the present moment, freeing oneself from negative thoughts, and achieving spiritual growth and inner peace through mindfulness.', image: 'img/self-help4.jpg' },
            { title: 'Awaken the Giant Within', author: 'Tony Robbins', summary: 'Summary: Robbins provides strategies for personal growth, emphasizing self-empowerment, goal achievement, and taking control of one\'s emotions, behaviors, and destiny.', image: 'img/self-help5.jpg' },
            { title: 'Man\'s Search for Meaning', author: 'Viktor E. Frankl', summary: 'Summary: Frankl, a Holocaust survivor, explores the human search for meaning, resilience, and finding purpose even in the midst of suffering, offering profound insights into the human psyche.', image: 'img/self-help6.jpg' },
            { title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', summary: 'Summary: Manson\'s book challenges conventional self-help advice, advocating for embracing discomfort, setting realistic values, and prioritizing what truly matters for a more fulfilling life.', image: 'img/self-help7.jpg' },
            { title: 'The Four Agreements: A Practical Guide to Personal Freedom', author: 'Don Miguel Ruiz', summary: 'Summary: Ruiz outlines four principles rooted in ancient Toltec wisdom, guiding readers to practice self-awareness, personal freedom, and to break limiting beliefs for a more authentic life.', image: 'img/self-help8.jpg' },
            { title: 'You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life', author: 'Jen Sincero', summary: 'Summary: Sincero\'s book offers motivational and humorous advice, encouraging readers to overcome self-doubt, embrace their potential, and create a life they love through self-love and confidence.', image: 'img/self-help9.jpg' },
            { title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones', author: 'James Clear', summary: 'Summary: Clear provides practical strategies to transform habits, emphasizing small changes and consistent actions to build positive habits and break detrimental ones effectively.', image: 'img/self-help10.jpg' },
        ],

        mystery: [
            { title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle', summary: 'Summary: This collection features Sherlock Holmes and Dr. Watson solving intriguing mysteries using deductive reasoning and keen observation. Readers delve into Holmes\' brilliant mind and the thrill of solving cases alongside the iconic detective.', image: 'img/mystery1.jpg' },
            { title: 'Murder on the Orient Express', author: 'Agatha Christie', summary: 'Summary: Hercule Poirot investigates a murder aboard the luxurious Orient Express, leading to a complex and surprising resolution. Christie\'s novel is known for its intricate plotting and suspenseful storytelling.', image: 'img/mystery2.jpg' },
            { title: 'The Maltese Falcon', author: 'Dashiell Hammett', summary: 'Summary: Private investigator Sam Spade becomes embroiled in a search for a valuable statuette, encountering murder and deception. Hammett\'s novel is a classic example of hard-boiled detective fiction with morally ambiguous characters.', image: 'img/mystery3.jpg' },
            { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', summary: 'Summary: Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate a cold case involving a wealthy family\'s disappearance. Larsson\'s novel combines financial intrigue, corruption, and dark family secrets into a gripping mystery.', image: 'img/mystery4.jpg' },
            { title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', summary: 'Summary: Sherlock Holmes and Dr. Watson investigate a curse haunting the Baskerville family, uncovering a web of deceit and superstition. Doyle\'s novel is a classic detective tale set against a gripping atmospheric backdrop.', image: 'img/mystery5.jpg' },
            { title: 'The Big Sleep', author: 'Raymond Chandler', summary: 'Summary: Private detective Philip Marlowe navigates blackmail and murder within the wealthy Sternwood family. Chandler\'s noir style and morally complex characters set the standard for hard-boiled detective fiction.', image: 'img/mystery6.jpg' },
            { title: 'And Then There Were None', author: 'Agatha Christie', summary: 'Summary: Ten strangers are lured to an isolated island and mysteriously killed one by one, creating a suspenseful and intricate whodunit. Christie\'s novel is a masterpiece of plotting and misdirection.', image: 'img/mystery7.jpg' },
            { title: 'The No. 1 Ladies\' Detective Agency', author: 'Alexander McCall Smith', summary: 'Summary: Precious Ramotswe, Botswana\'s first female private detective, solves cases while navigating life in Africa. Smith\'s novel is a refreshing take on detective fiction, emphasizing human nature and intuition.', image: 'img/mystery8.jpg' },
            { title: 'The Moonstone', author: 'Wilkie Collins', summary: 'Summary: Sergeant Cuff investigates the theft of a valuable diamond in this Victorian mystery novel with multiple viewpoints and innovative narrative structure. Collins\' work is a gripping tale of theft and intrigue.', image: 'img/mystery9.jpg' },
            { title: 'The Secret Adversary', author: 'Agatha Christie', summary: 'Summary: Tommy and Tuppence, a dynamic duo, embark on their first case involving espionage and international intrigue. Christie\'s novel introduces engaging characters and clever plot twists.', image: 'img/mystery10.jpg' },
        ],

        thriller: [
            { title: 'Gone Girl', author: 'Gillian Flynn', summary: 'Summary: Nick and Amy\'s marriage takes a dark turn on their anniversary when Amy goes missing. Flynn\'s novel explores deception, manipulation, and the complexities of modern relationships, with a shocking and unpredictable plot.', image: 'img/thriller1.jpg' },
            { title: 'The Girl on the Train', author: 'Paula Hawkins', summary: 'Summary: Rachel, an alcoholic, becomes entangled in a missing person\'s case, leading to a suspenseful exploration of unreliable narration, secrets, and psychological suspense on a commuter train.', image: 'img/thriller2.jpg' },
            { title: 'The Silent Patient', author: 'Alex Michaelides', summary: 'Summary: Alicia Berenson shoots her husband and then stops speaking. A forensic psychologist unravels the mystery behind her silence, leading to a mind-bending exploration of trauma, mental health, and deception.', image: 'img/thriller3.jpg' },
            { title: 'Before I Go to Sleep', author: 'S.J. Watson', summary: 'Summary: Christine Lucas wakes up every day with no memory due to amnesia. As she unravels the truth about her life, the psychological thriller explores trust, identity, and the consequences of forgotten memories.', image: 'img/thriller4.jpg' },
            { title: 'Sharp Objects', author: 'Gillian Flynn', summary: 'Summary: Journalist Camille Preaker returns to her hometown to cover a series of brutal murders, confronting her own troubled past. Flynn\'s novel delves into family secrets, psychological trauma, and the darkness within.', image: 'img/thriller5.jpg' },
            { title: 'Shutter Island', author: 'Dennis Lehane', summary: 'Summary: U.S. Marshals investigate the disappearance of a prisoner from a mental institution, leading to a mind-bending psychological thriller that challenges perceptions of reality and identity.', image: 'img/thriller6.jpg' },
            { title: 'The Talented Mr. Ripley', author: 'Patricia Highsmith', summary: 'Summary: Tom Ripley, a charming sociopath, infiltrates the lives of the wealthy, leading to a psychological cat-and-mouse game of deception, obsession, and murder.', image: 'img/thriller7.jpg' },
            { title: 'The Shining', author: 'Stephen King', summary: 'Summary: The Torrance family faces supernatural horrors as they spend the winter in the haunted Overlook Hotel. King\'s psychological thriller explores the descent into madness, isolation, and the power of the supernatural.', image: 'img/thriller8.jpg' },
            { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', summary: 'Summary: Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate a cold case involving a wealthy family\'s disappearance, uncovering dark family secrets and financial intrigue in this gripping mystery-thriller.', image: 'img/thriller9.jpg' },
            { title: 'In the Woods', author: 'Tana French', summary: 'Summary: Detective Rob Ryan investigates the murder of a young girl in a small Irish town, but his own troubled past resurfaces, creating a psychological mystery filled with suspense and intricate storytelling.', image: 'img/thriller10.jpg' },
        ],
        // Add more genres and their books data as needed
    };

    return data[genre] || [];
}

function createBookElement(book) {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    const imageElement = document.createElement('img');
    imageElement.src = book.image;
    imageElement.alt = book.title;

    const titleElement = document.createElement('h3');
    titleElement.textContent = book.title;

    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${book.author}`;

    const summaryElement = document.createElement('p');
    summaryElement.textContent = book.summary;

    bookElement.appendChild(imageElement);
    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(summaryElement);

    return bookElement;
}



// Handle contact form submission
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;

    // Simulate a successful submission
    document.getElementById('response-message').innerText = `Thank you, ${name}! Your message has been sent.`;

    // Reset the form
    document.getElementById('contact-form').reset();
}


// const books = [
//     { title: "The Great Gatsby", url: "great-gatsby.html" },
//     { title: "To Kill a Mockingbird", url: "to-kill-a-mockingbird.html" },
//     { title: "1984", url: "1984.html" },
// ];

// function searchBook() {
//     const query = document.getElementById('search').value.toLowerCase();
//     const book = books.find(b => b.title.toLowerCase() === query);

//     if (book) {
//         // Redirect to the book's page if found
//         window.location.href = book.url;
//     } else {
//         // Display "book not available" message
//         document.getElementById('message').textContent = "Book is not available.";
//     }
// }

const quotes = [
    '"A reader lives a thousand lives before he dies." - George R.R. Martin',
    '"The only thing that you absolutely have to know is the location of the library." - Albert Einstein',
    '"A room without books is like a body without a soul." - Marcus Tullius Cicero',
    '"So many books, so little time." - Frank Zappa',
    '"Reading is essential for those who seek to rise above the ordinary." - Jim Rohn'
];
let currentQuoteIndex = 0;

function displayNextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    document.getElementById('quote-display').innerText = quotes[currentQuoteIndex];
}

setInterval(displayNextQuote, 3000); // Change quote every 3 seconds


