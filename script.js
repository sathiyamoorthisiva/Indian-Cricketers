let displayImg = document.getElementById('displayImg')
let showhideBtn = document.getElementById('showhideBtn')
let txtPlayerName=document.getElementById('txtPlayerName')
let imgIndex = 0
let isShowImage = true

const imagesList = ['dhoni1.jpeg','sachin1.jpg','rishabh-pant.jpg','rohitsharma.jpg','deepak2.jpeg','ruturaj.jpg', 'ashwin.jpeg', 'shikardawan.jpeg', 'hardikpandya.jpeg', 'image1.jpeg', 'image2.jpg', 'image4.webp', 'jaspritbumrah.jpeg', 'image8.jpeg', 'image9.png', 'image11.png','yuvaraj.jpeg', 'dhoni2.jpeg']

const personsList = [
    {
        imageUrl: 'dhoni1.jpeg',
        name: 'MS Dhoni'
    }, {
        imageUrl: 'ashwin.jpeg',
        name: 'Ravichandran Ashwin'
    },
    {
        imageUrl: 'rishabh-pant.jpg',
        name: 'Rishabpant'
    },
    {
        imageUrl: 'rohitsharma.jpg',
        name: 'Rohit Sharma'
    },
    {
        imageUrl: 'ruturaj.jpg',
        name: 'Ruturaj Gaikwad'
    },
    {
        imageUrl: 'deepak2.jpeg',
        name: 'Deepak Chahar'
    },
    {
        imageUrl: 'shikardawan.jpeg',
        name: 'Shikardawan'
    },
    {
        imageUrl: 'hardikpandya.jpeg',
        name: 'Hardik Pandya'
    },
    {
        imageUrl: 'sachin1.jpg',
        name: 'Sachin Tendulkar'
    },
    {
        imageUrl: 'image1.jpeg',
        name: 'KL Rahul'
    },
    {
        imageUrl: 'image2.jpg',
        name: 'Ishankisan'
    },
    {
        imageUrl: 'image4.webp',
        name: 'Virat Kohli'
    },
    {
        imageUrl: 'jaspritbumrah.jpeg',
        name: 'Jasprit Bumrah'
    },
    {
        imageUrl: 'image8.jpeg',
        name: 'Suresh Raina'
    },
    {
        imageUrl: 'image9.png',
        name: 'Ravindra Jadeja'
    },
    {
        imageUrl: 'image11.png',
        name: 'Suryakumar Yadhav'
    },
    {
        imageUrl: 'yuvaraj.jpeg',
        name: 'Yuvaraj Singh'
    },
    {
        imageUrl: 'dhoni2.jpeg',
        name: 'MS Dhoni'
    }
]
// displayImg.src = 'images/'+imagesList[imgIndex]

window.onload = () => {
    loadImage()
    
}

function showHideImage() {
    if (isShowImage) {
        displayImg.style.visibility = 'hidden'
        showhideBtn.textContent = 'Show Image'
    }
    else {
        displayImg.style.visibility = 'visible'
        showhideBtn.textContent = 'Hide Image'
    }
    isShowImage = !isShowImage
}

function loadImage() {
    displayImg.src = 'images/' + personsList[imgIndex].imageUrl
    txtPlayerName.textContent=personsList[imgIndex].name
};

function showImage() {
    displayImg.style.visibility = 'visible'
}

function hideImage() {
    displayImg.style.visibility = 'hidden'
}
function PreviousImage() {
    if (imgIndex > 0) {
        imgIndex -= 1
    }
    loadImage()
}
function NextImage() {
    if (imgIndex < imagesList.length - 1) {
        imgIndex += 1
    }
    loadImage()
}