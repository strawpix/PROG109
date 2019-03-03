function nextPhoto()
{
 console.log(i);
 if (i <myPhotos.length - 1)
 {i++;
 }
 else
 {i=0;}

document.getElementById("newImage").src = myPhotos[i];
document.getElementById("myDescription").innerHTML = myDescription[i];

 
}

function previousPhoto()
{
 
 if (i > 0)
 { i--;
}
 else 
 {i = myPhotos.length - 1;
}
 document.getElementById("newImage").src = myPhotos[i];
 document.getElementById("myDescription").innerHTML = myDescription[i];
 
}

var nextPic = document.getElementById('next'); 
nextPic.addEventListener('click', nextPhoto, false);


var previousPic = document.getElementById('previous'); 
previousPic.addEventListener('click', previousPhoto, false);
 
var  i=0; //Indicates the current position on the array

setInterval(function (){ nextPhoto(); }, 5000);

myPhotos = [
"chess/black-bishop.png",
"chess/gold-queen.png",
"chess/black-king.png",
"chess/gold-bishop.png",
"chess/black-knight.png",
"chess/gold-pawn.png"];

myDescription = [
"Black Bishop",
"Gold Queen",
"Black King", 
"Gold Bishop",
"Black Knight",
"Gold Pawn",];

/* 
"http://www.dwt.com/files/Uploads/Images/Offices/Seattle/seattle.jpg",
"http://depts.washington.edu/biowww/images/seattle_kerry_park.png",
"http://media-cdn.tripadvisor.com/media/photo-s/03/9b/30/26/seattle.jpg",
"https://farm4.staticflickr.com/3541/3628340618_f34e4e2dba_z.jpg?zz=1",
"https://higherlogicdownload.s3.amazonaws.com/GOVERNANCEPROFESSIONALS/72e09696-9330-49a1-968c-f6d2a84b5cc8/UploadedImages/Seattle%20Waterfront.jpg"];
*/