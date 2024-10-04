const today = new Date("10/4/24"); //  date format
const currentHour = today.getHours();
let message = "Hello";

// If it's morning, show a good morning message
if (currentHour <= 12) {
    message = "Good morning, beautiful world!";
} else if (currentHour > 12 && currentHour <= 17) {
    message = "Hello beautiful world";
} else if (currentHour > 17) {
    message = "Good evening, my friend";
}

// ability handle button click
const handleClick = () => {
    alert(message);
};