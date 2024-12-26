//Create additional tags for layout

let meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0";
document.head.appendChild(meta);

//**Snowflakes for Intro Section */

const snowflakeContainer = document.getElementById('introduction');

//Generate snowflakes dynamically
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  // Randomize starting position and size
  const size = Math.random() * 10 + 5 + 'px';
  const left = Math.random() * 100 + '%'; 
  const duration = Math.random() * 3 + 2 + 's'; 
  const delay = Math.random() * 1 + 's'; 

  snowflake.style.width = size;
  snowflake.style.height = size;
  snowflake.style.left = left;
  snowflake.style.animationDuration = duration;
  snowflake.style.animationDelay = delay;

  // Append snowflake to the container
  snowflakeContainer.appendChild(snowflake);

  // Remove the snowflake after it falls out of view
  setTimeout(() => {
    snowflake.remove();
  }, parseFloat(duration) * 1000); 
}

setInterval(createSnowflake, 100);


//*** Hemisphere Section for Clouds */
const cloudsEffect = document.getElementById('hemispheres');
const cloudsLayer = document.createElement('div');
cloudsLayer.className="clouds-section"
cloudsEffect.parentNode.insertBefore(cloudsLayer, cloudsEffect);
cloudsLayer.appendChild(cloudsEffect);


/**Add additional styles for div Celebrations */
const CelebrationSection = document.getElementById('celebrations');
const CelebrationCardDiv = document.createElement('div');
CelebrationCardDiv.className = 'celebration-card';



const children = Array.from(CelebrationSection.children);

children.forEach((child) => {
    if (child.classList.contains('celebration')) {
        CelebrationCardDiv.appendChild(child);
    }
  });


CelebrationSection.appendChild(CelebrationCardDiv)

/**Add additional styles for div traditions */
const traditionalSection = document.getElementById('traditions');
const cards = Array.from(traditionalSection.children)
cards.forEach((child)=>{
    if (child.tagName === 'LI') {
        
    }
})

//**Change the Conclusion Section by Adding Additional Tags */

const targetDiv = document.getElementById('conclusion');
const conclusionDiv = document.createElement('div');

//Create a new div picture
const imageDiv = document.createElement('div')
const img = document.createElement('img');
imageDiv.className = 'conclusion-image';
imageDiv.style.width = "50%"
img.src = 'aaron2.jpg';
img.style.width = '100%'
imageDiv.appendChild(img)

conclusionDiv.appendChild(imageDiv)

// Add Style to Conclusion Wrapper
conclusionDiv.className = 'conclusion_wrapper';
conclusionDiv.style.display = "flex";
conclusionDiv.style.alignItems = "flex-start"
conclusionDiv.style.marginTop= "20px";


// Insert the wrapper div into the DOM before the target div
targetDiv.parentNode.insertBefore(conclusionDiv, targetDiv);

// Move the target div inside the wrapper
conclusionDiv.appendChild(targetDiv);


