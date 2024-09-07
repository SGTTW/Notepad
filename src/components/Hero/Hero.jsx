import React from "react";
import "./Hero.css";
import memesData from "../../memesData";
const Hero = () => {
  let url;
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(randomNumber);
    url = memesArray[randomNumber].url;
    console.log(url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />

        <input type="text" placeholder="Bottom Text" className="form--input" />

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        {/* <p key={101716} image={props.url}>
          {/* let's post a random image from our dataset */}
        {/* <img src="" alt="" srcset="" /> */}
        {/* </p> */}
        <p>{url}</p>
      </div>
    </main>
  );
};

export default Hero;

/*

    }
          
        //   "id": "101716",
        // "name": "Yo Dawg Heard You",
        // "url": "https://i.imgflip.com/26hg.jpg",
        // "width": 500,
        // "height": 323,
        // "box_count": 2}

    <main>
            <form className="form">
                <div>
                    <label className="form--label">Top text</label>
                    <input
                        type="text"
                        placeholder="Shut up"
                        className="form--input"
                    />
                </div>
                <div>
                    <label className="form--label">Bottom text</label>
                    <input
                        type="text"
                        placeholder="and take my money"
                        className="form--input"
                    />
                </div>
                <button
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>




        
//another form


             <form action="" className="form">
        <input type="text" placeholder="Shut up" className="l-input" />{" "}
        <input
          type="text"
          placeholder="and take my money"
          className="r-input"
        />
        <button className="form-button">Get a new meme image 🖼</button>
      </form>



      //filter properties
       filter: brightness(50%);



       //random images
         // let getRandomMeme = () => {
  //   let randomIndex = Math.floor(Math.random() * memesData.length);

  //   let randomMeme = memesData[randomIndex];

  //   console.log("Random Meme Image URL:", randomMeme.imageUrl);
  // };

*/
