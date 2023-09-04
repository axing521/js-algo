//myFuc
let correctArray =watchList.map(item=>({
    director:item.Director,
    rating:item.imdbRating
  }))
 .filter(item=>item.director==="Christopher Nolan")
let howMany=correctArray.length,
sum=correctArray.reduce((haven,having)=>haven+Number(having.rating),0);                           
var averageRating=sum/howMany;

// 请在本行以上添加你的代码

console.log(averageRating); 

//单用reduce+对象展开赋值
function getRating(watchList) {
    // Add your code below this line
    const averageRating = watchList.reduce(({ sum, count }, { Director: dir, imdbRating: rating },  idx, arr) => {
      if (dir === 'Christopher Nolan') {
        count++;
        sum += Number(rating);
      }
      return idx === arr.length - 1
        ? sum / count
        : { sum, count };
    }, { sum: 0, count: 0 });
    // Add your code above this line
    return averageRating;
  }
  console.log(getRating(watchList));

//
function getRating(watchList){
    // Add your code below this line
    var count = 0;
    var averageRating = watchList.reduce((sum,movie) =>  {
      if (movie.Director == "Christopher Nolan") {
        count+=1;
        return sum + parseFloat(movie.imdbRating);
      }
      return sum;
    }, 0) / count;
    // Add your code above this line
    return averageRating;
  }
  console.log(getRating(watchList));

  //
  function getRating(watchList){
    // Add your code below this line
    var averageRating =
    watchList
      // Use filter to find films directed by Christopher Nolan
      .filter(film => film.Director === "Christopher Nolan")
      // Use map to convert their ratings from strings to numbers
      .map(film => Number(film.imdbRating))
      // Use reduce to add together their ratings
      .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    // Divide by the number of Nolan films to get the average rating
    watchList.filter(film => film.Director === "Christopher Nolan").length;
    // Add your code above this line
    return averageRating;
  }
  console.log(getRating(watchList));  