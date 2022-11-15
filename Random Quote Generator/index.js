function App() {
const[quotes , setQuotes] = React.useState([]);
const[randomQuotes , setRandomQuotes] = React.useState("");
const [color, setColor] = React.useState("#2c2c2c");

React.useEffect(() => {
    async function fetchData (){
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        setQuotes(data);

        let random = Math.floor(Math.random() * data.length);
        setRandomQuotes(data[random]);
    }
    fetchData();
},[])

    const getNewQuote =() =>{  

        
var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
    '#110ea3',
    '#e519a8',
    '#1f4996',
    '#b23f0e',
  ];

        let randomColor = Math.floor(Math.random() * colors.length);
        let random = Math.floor(Math.random() * quotes.length);
        setRandomQuotes(quotes[random]);
        setColor(colors[randomColor]);
    }
  

  return (
    <div style={{backgroundColor: color , minHeight : "100vh" , fontFamily : "MV Boli", }} >
         <div className="container pt-5">
        <div className="jumbotron jumb"  id="quote-box" >
            <div className="card card-style">
            <div className="card-header header"><b>Inspirational Quotes</b></div>
            <div className="card-body body">
                {randomQuotes ? (
                    <>
                    <h5 className="card-title" id="author" style={{color: color}}>- {randomQuotes.author || "No author"}</h5>
                    <p className="card-text" id="text"><i class="fa fa-quote-left"></i>   {randomQuotes.text} </p>
                    </>
                ) : 
                (
                    <h2>Loading...</h2>
                )}

                <div className="row">
                    <button className="btn btn-secondary ml-3" style={{backgroundColor: color}} id="new-quote" onClick={getNewQuote}> New Quote</button>

                    <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"
                     className="btn ml-3 text-white bg-dark"
                     >
                        <i className="fa fa-twitter"></i>
                        </a>
                    <a href="https://www.tumblr.com/" target="_blank" className="btn  ml-3 text-white bg-dark"><i className="fa fa-tumblr"></i></a>
                    </div>
            </div>
        </div>
        </div>
        <div class="footer">Made For FreeCodeCamp Project - By <a href="https://www.linkedin.com/in/hazem-marzouki/" target="blank"> ♐︎ Hazem ♐︎ </a>.</div>

        </div>
    </div>

    
     
     );
     
}



ReactDOM.render(<App />, document.getElementById('app'))