// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
   
  const fetchNews = async () => {
    const apiKey = '2daebaae3dfd436eac535c6312c3a838';
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2daebaae3dfd436eac535c6312c3a838
    `;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching news:', error);
    }
};

fetchNews();


  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  